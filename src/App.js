import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'
import Home from './pages/Home';
import Hardskills from './pages/Hardskills';
import Projects from './pages/Projects';
import Menu from './components/Menu';

const Main = styled.main`
  height: 100%;
`

function App() {
  
  return (
    <div className="App">
      
      <Menu />
      <hr/>
      <Main>
        <Routes>
          <Route  path="/hardskills" element={ <Hardskills/> } />
          <Route  path="/projects" element={ <Projects/> } />
          <Route  exact path="/" element={ <Home/> } />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
