import React from 'react'
import { useParams } from 'react-router-dom'

function Trailer({list}) {
    
  const {id}=useParams()
  return (
    <div>

    <iframe width="853" height="480" src={list[id].trailer} title="Saw (2004) Official Trailer #1 - James Wan Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p>{list[id].description}</p>
    </div>
  )
}

export default Trailer
