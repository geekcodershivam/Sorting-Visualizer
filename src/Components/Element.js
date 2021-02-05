import React from 'react'
import styled from 'styled-components'

export default function Element({data}) {
  const width=770/data.length;
  return (
    <Container>
      {data.map((size)=>(
        <>
        <Bar key={size} height={`${4*size}px`} width={`${width}px`}>
          {data.length<50 && <Text>{size}</Text>}
          </Bar>
        </>
      ))}
    </Container>
  );
}
const Text=styled.div`
color:white;
font-size:1rem;
font-weight: bold;
`;
const Container=styled.div`
  position:absolute;
  display: flex;
  flex-direction:row;
  width:100%;
  margin-top:8rem;
  padding-left:25px;
  padding-right:25px;
  justify-content:center;
`;

const Bar=styled.div`
display: flex;
align-items:center;
justify-content:center;
width:${(props)=>props.width};
height:${(props)=>props.height};
background-color:${(props)=>props.color || "#000"};
margin-right:2px;
`;

