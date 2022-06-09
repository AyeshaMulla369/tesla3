import React from 'react'
import styled from "styled-components"
import Section11 from "./Section11"
import Section12 from './Section12'
function Section1({title1,description1,leftBtnText1,rightBtnText1,backgroundImg1,title2,description2,leftBtnText2,rightBtnText2,backgroundImg2})
{



  return (
      <Wrap>
    <Section11 
                      title11= {title1}
                      description11 = {description1}
                      backgroundImg11= {backgroundImg1}
                      leftBtnText11= {leftBtnText1}
                      rightBtnText11= {rightBtnText1}
            />

            <Section12 
            title12= {title2}
            description12 = {description2}
            backgroundImg12= {backgroundImg2}
            leftBtnText12= {leftBtnText2}
            rightBtnText12= {rightBtnText2}
  />
  </Wrap>

  )
}
export default Section1
const Wrap=styled.div`
width:100 vw;
height:100 vh;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:row;
justify-content:space-between;   //vertical 
align-items:center; //horizontal
background-image: ${props => `url("/images/${props.bgImage}")`
}};

`