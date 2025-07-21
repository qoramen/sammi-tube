import { Box, Container } from '@mui/material';
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { ApiService } from '../../service/api.service';
import { ChannelCard, Videos } from '../';

const Channel = () => {
    const { id } = useParams()
    const [channelDetail, setChannelDetail] = useState()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`);
                setChannelDetail(dataChannelDetail.items[0])
                const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet`)
                setVideos(dataVideo?.items)                
            } catch (error) {
                console.log(error);
            }
        }

        getData()
    }, [id])


    return (
        <Box minHeight={'90vh'} mt={'1vh'}>
            <Box>
                <Box
                    width={'100%'}
                    height={'300px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.image?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <ChannelCard video={channelDetail} marginTop={'-100px'}/>
            </Box>
            <Container maxWidth={'90%'}>
                <Videos videos={videos} />
            </Container>
        </Box>
    )
}

export default Channel