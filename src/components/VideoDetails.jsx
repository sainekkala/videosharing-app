import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function VideoDetails ({videos :{id : {videoId}, snippet:{title, channelTitle,description}}}) {
    if(!videoId) return <div>...loading</div>
    const videosrc =`https://www.youtube.com/embed/${videoId}`;
    return (
        <>
        <Paper elevation={6} style={{height:"60%"}}>
            <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="video player"
            src={videosrc}
             />
        </Paper>
        <Paper elevation={6} >
            <Typography variant="h6">
                {title} - {channelTitle}
            </Typography>
            <Typography variant="subtitle1">
                {channelTitle}
            </Typography>
            <Typography variant="subtitle2">
                {description}
            </Typography>
        </Paper>
        </>
    )
}

export default VideoDetails;