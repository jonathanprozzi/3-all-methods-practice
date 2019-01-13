import React, { Component } from "react";
import styled from "styled-components";
import { config } from "react-spring";
import { Spring, Transition, animated } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/addons";

const pages = [
  style => (
    <animated.div style={{ ...style, background: "#b3FFBD" }}>
      <SectionTitle>One: 🧙</SectionTitle>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: "#B2DBBF" }}>
      <SectionTitle>Two: 🧙</SectionTitle>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: "#12DBBF" }}>
      <SectionTitle>Three: 🧙</SectionTitle>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: "#12DBBF" }}>
      <SectionTitle>Four: 🧙</SectionTitle>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style, background: "#12DBBF" }}>
      <SectionTitle>Five: 🧙</SectionTitle>
    </animated.div>
  )
];

class App extends Component {
  state = { index: 0 };
  toggle = e =>
    this.setState(state => ({
      index: state.index === pages.length - 1 ? 0 : state.index + 1
    }));
  render() {
    return (
      <AppWrapper>
        <Parallax
          config={config.slow}
          pages={4}
          scrolling={true}
          vertical
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0}>
            <SectionContainer bgColor="#16c79e">
              <SectionTitle>Section One</SectionTitle>
              <GhostButton onClick={() => this.parallax.scrollTo(1)}>
                Interesting... 🧐
              </GhostButton>
            </SectionContainer>
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <SectionContainerGrid bgColor="#109173">
              <SubSectionContainer>
                <SubSection bgColor="#32a98d">
                  <SectionTitle>...and then? 🦄</SectionTitle>
                </SubSection>
                <SubSection bgColor="#5ecfb5">
                  <SectionTitle>...and then? 🦄</SectionTitle>
                </SubSection>
                <SubSection bgColor="#8dddca">
                  <SectionTitle>...and then? 🦄</SectionTitle>
                </SubSection>
              </SubSectionContainer>
            </SectionContainerGrid>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <SectionContainer bgColor="#0a5c49">
              <SectionTitle>Section Three</SectionTitle>
              <GhostButton>Interesting... 🧐</GhostButton>
            </SectionContainer>
          </ParallaxLayer>
          <ParallaxLayer offset={3}>
            <SectionContainerGridTwo onClick={this.toggle}>
              <SubSection>
                <SectionTitle>Hi</SectionTitle>
              </SubSection>
              <SubSectionTwo>
                <Transition
                  native
                  unique
                  reset
                  items={this.state.index}
                  from={{
                    opacity: 0,
                    transform: "translate3d(-50%,-0,0)"
                  }}
                  enter={{
                    opacity: 1,
                    transform: "translate3d(0%,0%,0%)"
                  }}
                  leave={{
                    opacity: 0,
                    transform: "translate3d(-100%,0,0)"
                  }}
                >
                  {index => pages[index]}
                </Transition>
              </SubSectionTwo>
            </SectionContainerGridTwo>
          </ParallaxLayer>
        </Parallax>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const SectionTitle = styled.h2`
  color: #dafbf3;
  font-size: 3rem;
  margin: 0;
  padding-bottom: 2rem;
`;

const SectionContainer = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionContainerGrid = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const SectionContainerGridTwo = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SubSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SubSection = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubSectionTwo = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;

  div {
    cursor: pointer;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const GhostButton = styled.button`
  background: rgba(218, 251, 243, 0);
  color: rgba(218, 251, 243, 1);
  border: 2px rgba(218, 251, 243, 1) solid;
  border-radius: 2rem;
  font-size: 2rem;
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(218, 251, 243, 1);
    color: #4d8f7f;
    cursor: pointer;
  }

  /* &:focus:not(:focus-visible) {
    outline: none;
  } */

  &:focus {
    outline: 0.1rem thin dotted;
  }
`;

export default App;
