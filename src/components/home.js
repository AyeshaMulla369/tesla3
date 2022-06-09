import React from 'react'
import styled from "styled-components"
import Section0 from './Section0'
import Section from "./Section"
import Section1 from './Section1'
function home() {
  return (
    <Container>
          <Section1
            title1="Model S"
            description1="Order Online for Touchless Delievery"
            backgroundImg1="model-s.jpg"
            leftBtnText1="Custom Order"
            rightBtnText1="Existing Inventory"
                      title2="Model Y"
                      description2="Order Online for Touchless Delievery"
                      backgroundImg2="model-y.jpg"
                      leftBtnText2="Custom Order"
                      rightBtnText2="Existing Inventory"
            />
      <Section
                      title01="Model 3"
                      description01="Order Online for Touchless Delievery"
                      backgroundImg01="model-3.jpg"
                      leftBtnText01="Custom Order"
                      rightBtnText01="Existing Inventory"
            />
                  <Section0
                        title="Model X"
                        description="Order Online for Touchless Delievery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
              />
       <Section0
                      title="Lowest Costing solar panel in World"
                      description="Money Back Guranteed"
                      backgroundImg="solar-panel.jpg"
                      leftBtnText="Order Now"
                      rightBtnText="Learn More"
            />
                <Section0
                      title="Solar Roof "
                      description="Produce Clean Energy From Your Roof "
                      backgroundImg="solar-roof.jpg"
                      leftBtnText="Shop Now"
                      rightBtnText="Learn More"
            />
                <Section0
                      title="Accessories"
                      description=""
                      backgroundImg="accessories.jpg"
                      leftBtnText="Shop Now"
                     
            />
    </Container>
  )
}

export default home
const Container =styled.div`
  height: 100vh;
  `