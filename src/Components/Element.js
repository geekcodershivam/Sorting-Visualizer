import React from 'react'
import styled from 'styled-components'

export default function Element({currentidx,data,currentNextidx,final,currentprevidx,currentprevNextidx}) {
  const width=770/data.length;
  return (
    <Container>
      {data.map((size,i)=>(
        <>
        <Bar 
        key={i} 
        height={`${4*size}px`} 
        width={`${width}px`}
        active={currentidx===i}
        isFinal={final}
        style={
          currentNextidx===i ? {backgroundColor:"green"} :null}
        activePrev={currentprevidx===i}
        activeNextPrev={currentprevNextidx===i}
        
        >
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
background-color:${(props)=>props.active ? "#e54c21" : "#6299f1"};
background-color:${(props)=>props.isFinal};
background-color:${(props)=>props.activePrev ? "red": null};
background-color:${(props)=>props.activeNextPrev ? "pink": null };
margin-right:2px;
`;

