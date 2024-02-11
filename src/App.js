import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Trailer';
import { useState } from 'react';


function App() {
  const [list,setlist]=useState([{title:'FALLING IN LOVE',description:'When Gabriella shares a trip to a fair at the Citadine and acquires a rustic terrace in Nouvelle-Zélande, she sets it up with a kindly businessman, Jake Taylor, for repair and profit.',posterURL:'http://fr.web.img6.acsta.net/pictures/19/08/19/10/00/0449235.jpg',trailer:"https://www.youtube.com/embed/S-1QgOMQ-ls",rating:'8/10'},
  {title:'SAW',description:'Saw is a 2004 American horror film directed by James Wan, in his feature directorial debut, and written by Leigh Whannell from a story by Wan and Whannell',posterURL:'https://www.themoviedb.org/t/p/original/mlllmFvodsry9QUIc3fT6Hf4pXd.jpg',trailer:'https://www.youtube.com/watch?v=S-1QgOMQ-ls',rating:'5/10'},
  {title:'The Gold Rush',description:'In this classic silent comedy, the Little Tramp (Charles Chaplin) heads north to join in the Klondike gold rush.',posterURL:'https://image.tmdb.org/t/p/original/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',trailer:'https://www.youtube.com/watch?v=kDlEvaKBkhU',rating:'6/10'}
  ])


  
  return (
    <div className="App">
   

     <Routes>
      <Route path={"/"} element={  <MovieList list={list} setlist={setlist}></MovieList>}></Route>
      <Route path={"/:id"} element={<Trailer list={list}></Trailer>}></Route>

    
     </Routes>
    </div>

  );
}

export default App;
