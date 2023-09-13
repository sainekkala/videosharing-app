import { useState } from 'react'
import './App.css'
import youtubeapi from "./Api";
import Grid from '@mui/material/Grid'
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedvideo, setSelectedVideo] = useState({id:{}, snippet:{}})

  const handlesearch = async (searchitem) => {
    const {data :{items : videos}} = await youtubeapi.get("search",{
      params :{ 
        part : "snippet",
        maxResults : 5,
        key : "AIzaSyCfPUmJR_7CqiMSkgzkIXB92nhbsO-N5KI",
        q : searchitem
      }
    })
    setVideos(videos)
    setSelectedVideo(videos[0])
  }
 console.log(videos)
  return (
    <>
     <Grid style={{justifyContent:"center"}} container spacing={6}>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <SearchBar onSubmit= {handlesearch}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetails videos={selectedvideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onSelectedVideo={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
     </Grid>
    </>
  )
}

export default App
