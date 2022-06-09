import React from 'react'
import styled from "styled-components"
function Section({title01,description01,leftBtnText01,rightBtnText01,backgroundImg01}) {



  return (
    <Wrap bgImage={backgroundImg01}>

    <ItemText01>
      <h1>
        {title01}
      </h1>
      <p>{description01}</p>
    </ItemText01>
    <Buttons01> <ButtonGroup01>
        <LeftButton01>
            {leftBtnText01}
        </LeftButton01>
        {rightBtnText01 &&
                <RightButton01>
                {rightBtnText01}
            </RightButton01>
        
        }


    </ButtonGroup01>
    <DownArrow01 src="/images/down-arrow.svg"></DownArrow01>
    </Buttons01>
   
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100 vw;
height:50%;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:space-around;   //vertical 
align-items:center; //horizontal
background-image: ${props => `url("/images/${props.bgImage}")`
}};

`


const ItemText01=styled.div`
padding-top:15vh;
text-align:center;
margin-bottom:100px;
margin-left:-150px;
`

const ButtonGroup01=styled.div `
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
}

`


const LeftButton01=styled.div`
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

const RightButton01=styled(LeftButton01)`

  background:white;
  opacity:0.65;
  color:black;
`

const DownArrow01=styled.img`

  height:40px;
  overflow-x:hidden;
  animation:animateDown infinite 1.5s;
`
const Buttons01=styled.div `
  margin-top:100px;
  margin-left:150px;
  margin-right:-180px;
  margin-top:150px;
`


