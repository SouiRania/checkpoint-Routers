import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

function Trailer({list}) {
    
  const {id}=useParams()
  return (
    <div class="p-3 mb-2  text-black">
    
    
     
    <h1>{list[id].type}</h1>
    <iframe width="853" height="480" src={list[id].trailer} title="Saw (2004) Official Trailer #1 - James Wan Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br/><br/>
    <h6>{list[id].description}</h6> 

    <NavLink to={"/"} ><button type="button" class="btn-warning">Home</button>
    </NavLink>
    </div>
  )
}

export default Trailer
