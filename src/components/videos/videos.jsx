import { Box, Grid, Stack } from "@mui/material"
import { VideoCard, ChannelCard, Loader } from "../"

const Videos = ({ videos }) => {
  if (!videos) {
    return <Loader />
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {videos.map((item, idx) => (
        <Grid key={idx} item xs={2} md={4}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Grid>
      ))}
    </Grid>
  )
}

export default Videos