import React from 'react'
import MovieCard from './MovieCard';
import { useRef,useState }from 'react'
import AddMovie from './AddMovie';

function MovieList({list,setlist}) {
  


 const [filtredMovie,setFiltred]=useState(list)
  const R5=useRef()
  const R6=useRef()

  const filterdMovie=()=>{
    const filtredList=list.filter(e=>e.title.toUpperCase().includes(R5.current.value.toUpperCase()))
    setFiltred(filtredList)
  }
  const filterdMoviebyrate=()=>{
    const filtredList=list.filter(e=>e.rating.toUpperCase().includes(R6.current.value.toUpperCase()))
    setFiltred(filtredList)
  }
  return (
    <div style={{ display: 'flex', alignItems:"center",flexDirection:"column",padding:"2vw",gap:"40px"}}> 
    <h3>Liste of Movies</h3>
    <span>
    <input ref={R5} type='text' placeholder='search for a product' onChange={filterdMovie}>
      
    </input> <input ref={R6} type='text' placeholder='search for a rate' onChange={filterdMoviebyrate}></input>
    </span>
    <div style={{ display: 'flex' , gap:"40px"}}>

       {filtredMovie.map((e,index)=><MovieCard item={e} index={index}></MovieCard>)}
     

      <AddMovie list={list} setlist={setFiltred}></AddMovie>
    

      </div>
    </div>
  )
}

export default MovieList
