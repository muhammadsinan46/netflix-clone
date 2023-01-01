import React,{useEffect,useState} from 'react'
import axios from '../axios'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from  '../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then(resoponse=>{
      console.log(resoponse.data.results)
      setMovies(resoponse.data.results)
    }).catch(err =>{
      alert("network error")
    }) 
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters'>
      {
        movies.map((obj)=>
          <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'}  alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>
          
        )}
      </div>
     {urlId &&   <YouTube videoId={urlId.key} opts={opts}  />}
    </div>
  )
}

export default RowPost
