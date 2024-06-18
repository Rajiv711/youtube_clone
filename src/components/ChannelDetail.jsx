import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {

  const [channelDetail,setChannelDetail]=useState(null);

  const [videos,setVideos]=   useState([])
  
  const {id} =useParams();

  console.log(videos);


  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh"  >
       <Box display='flex' flexDirection='column' alignItems='center'>
        <div style={{
           background: 'linear-gradient(90deg, rgba(248,235,7,0.941747572815534) 25%, rgba(255,15,246,1) 96%)',
           zIndex:10,
           height:'300px',
           width:'100%'
        }}/>
           <ChannelCard  channelDetail={channelDetail  } marginTop='-110px' zIndex='100' /> 
       </Box>
       <Box display='flex' p='2'>
           <Box sx={{mr:{sm:'100px'}}}>
               <Videos video={videos}/>
           </Box>
       </Box>
    </Box>
  )
}

export default ChannelDetail