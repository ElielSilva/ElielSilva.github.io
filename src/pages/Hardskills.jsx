import React from 'react'
import styled from 'styled-components'
import docker from '../images/docker.svg'
import javascript from '../images/javascript.svg'
import python from '../images/python-5.svg'
import node from '../images/nodejs.svg'


const Div = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  & div {
    border: 4px solid #4717f6;
    border-radius: 10px;
  }
  & img {
    width: 80px;
    padding: 10px;
  }
`



function Hardskills() {
  return (
    <Div>
      <div>
        <img src={docker} alt="docker" />
      </div>
      <div>
        <img src={javascript} alt="javascript" />
      </div>
      <div>
        <img src={python} alt="python" />
      </div>
      <div>
        <img src={node} alt="node" />
      </div>
    </Div>
  );
}

export default Hardskills;