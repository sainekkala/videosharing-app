import Grid from '@mui/material/Grid';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function VideoItem({video, onSelectedVideo}) {
  return (
    <>
      <Grid item xs={12}>
        <Paper style={{display:"flex", alignItems:"center", cursor:"pointer"}} 
        onClick={() => onSelectedVideo(video)}>
            <img style={{marginRight:"10x"}} alt='thumbnaikl'
            src={video.snippet.thumbnails.medium.url}
            />
            <Typography variant='subtitle1'>
               <b>{video.snippet.title}</b> 
            </Typography>
        </Paper>
      </Grid>
    </>
  )
}

export default VideoItem;
