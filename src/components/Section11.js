import React from 'react'
import styled from "styled-components"
function Section11({title11,description11,leftBtnText11,rightBtnText11,backgroundImg11}) {



  return (
    <Wrap bgImage={backgroundImg11}>

    <ItemText11>
      <h1>
        {title11}
      </h1>
      <p>{description11}</p>
    </ItemText11>
    <Buttons11> <ButtonGroup11>
        <LeftButton11>
            {leftBtnText11}
        </LeftButton11>
        {rightBtnText11 &&
                <RightButton11>
                {rightBtnText11}
            </RightButton11>
        
        }


    </ButtonGroup11>
    <DownArrow11 src="/images/down-arrow.svg"></DownArrow11>
    </Buttons11>
   
    </Wrap>
  )
}

export default Section11

const Wrap=styled.div`
width:50%;
height:50%;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;   //vertical 
align-items:center; //horizontal
background-image: ${props => `url("/images/${props.bgImage}")`
}};

`


const ItemText11=styled.div`
padding-top:15vh;
text-align:center;
margin-bottom:100px;
margin-top:-100px;
`

const ButtonGroup11=styled.div `
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
}

`


const LeftButton11=styled.div`
  background-color:rgb(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
`

const RightButton11=styled(LeftButton11)`

  background:white;
  opacity:0.65;
  color:black;
`

const DownArrow11=styled.img`

  height:40px;
  overflow-x:hidden;
  animation:animateDown infinite 1.5s;
`
const Buttons11=styled.div ``


