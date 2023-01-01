import React from 'react';
import {Action, Orginals} from './url';
import NavBar from './navbar/NavBar';
import  './App.css'
import Banner from './banner/Banner';
import RowPost from './rowpost/RowPost';

function App() {
  return (
    <div className='App'>
       <NavBar/>
       <Banner/>
       <RowPost  url = {Orginals} title ='Netflix Orginals ' isSmall/>
       <RowPost url = {Action} title = 'Action'/>
    </div>
  );
}

export default App;
