import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import  CharacterList from './Components/CharacterList';

import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App () {
  const axios = require('axios');

  axios.get('https://rickandmortyapi.com/api/character/').then((resp: { data: any; }) => {
  
      console.log(resp.data);
  });

  return (
   <div className="App">   

   <Container>
     <Navbar>
  
      <img
        src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e"
        width="50%"
        height="auto"
        className="d-block align-top mx-auto"
        alt="React Bootstrap logo"
      />

     </Navbar>
   <CharacterList></CharacterList>
     </Container>
     </div>

  );
}

export default App;
