import React from 'react'
import styled from "styled-components"
function Section12({title12,description12,leftBtnText12,rightBtnText12,backgroundImg12}) {



  return (
    <Wrap bgImage={backgroundImg12}>

    <ItemText12>
      <h1>
        {title12}
      </h1>
      <p>{description12}</p>
    </ItemText12>
    <Buttons12> <ButtonGroup12>
        <LeftButton12>
            {leftBtnText12}
        </LeftButton12>
        {rightBtnText12 &&
                <RightButton12>
                {rightBtnText12}
            </RightButton12>
        
        }


    </ButtonGroup12>
    <DownArrow12 src="/images/down-arrow.svg"></DownArrow12>
    </Buttons12>
   
    </Wrap>
  )
}

export default Section12

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


const ItemText12=styled.div`
padding-top:15vh;
text-align:center;
margin-bottom:100px;
margin-top:-100px;
`

const ButtonGroup12=styled.div `
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
}

`


const LeftButton12=styled.div`
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

const RightButton12=styled(LeftButton12)`

  background:white;
  opacity:0.65;
  color:black;
`

const DownArrow12=styled.img`

  height:40px;
  overflow-x:hidden;
  animation:animateDown infinite 1.5s;
`
const Buttons12=styled.div ``


