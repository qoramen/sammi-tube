import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { colors } from '../../constants/colors'
import { moment } from "moment";

const VideoCard = ({ video }) => {
    return (
        <Card sx={{ width: '305px', boxShadow: 'none', borderRadius: 0, }}>
            <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title}
                sx={{width: '305px', height: '180px'}} />
            <CardContent sx={{ background: colors.primary, height: '200px', position: 'relative' }} />
            <Typography my={'5px'} sx={{opacity: '.4'}}>
                {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={'bold'}>
                {video?.snippet?.title.slice(0, 50)}
            </Typography>
        </Card>
    )
}

export default VideoCard