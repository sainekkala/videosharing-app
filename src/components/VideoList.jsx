import Grid from '@mui/material/Grid';
import React from "react";
import VideoItem from "./VideoItem";

function VideoList ({videos, onSelectedVideo}) {
    const listofvideos = videos.map((video) => {
        return(
            <VideoItem 
            key= {video.id.videoId}
            video= {video}
            onSelectedVideo= {onSelectedVideo}
            />
        )
    })
    return (
        <Grid container spacing={4}>
        {listofvideos}
        </Grid>
    )
};

export default VideoList;