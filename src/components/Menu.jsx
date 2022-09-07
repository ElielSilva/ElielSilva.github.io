import React from 'react'
import styled from 'styled-components'
import THEME_COLOR from '../theme'
import { useNavigate } from 'react-router-dom';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  width: 50%;
  
  & div {
    border-radius: 5px;
    padding: 2px 5px 2px 5px;
    background-color: ${ THEME_COLOR.BOTTUN_PRIMARY_COLOR };
    width: 100px;
    // border: 2px solid ${ THEME_COLOR.BOTTUN_SECOND_COLOR };
  }
  & div:hover {
    background-color: ${ THEME_COLOR.BOTTUN_SECOND_COLOR };
  }
`
const Span = styled.span`
  color: ${ THEME_COLOR.TEXT_COLOR };
  display: block;
  font-size: ${props => props.size};
`

function Menu() {
  const NAMES = [ 'Home','Hard skills', 'project', 'About me'];
  const NAMES_TRANSLATE = ['Principal','ferramentas','Projetos','Sobre mim'];
  const ROTAS = ['/','hardskills','projects','aboutme'];
  const navigate = useNavigate();
  return (
    <Nav>
      <Div >
      {
      NAMES.map((item, index)=> 
        <div onClick={ () => navigate(ROTAS[index])}>
          <Span size='20px'>{item}</Span>
          <Span size='10px'>{NAMES_TRANSLATE[index]}</Span>
        </div>) 
      }
      </Div>
      <div style={{backgroundColor: 'red'}}>
        <span>outro</span>
      </div>
    </Nav>
  )
}

export default Menu;





