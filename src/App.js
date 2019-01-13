import React, { Component } from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";
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
  state = {
    index: 0,
    initialLoad: true,
    firstSection: true,
    sectionFour: false
  };

  firstMove = e => {
    console.log(`state updated: ${this.state.sectionOne}`);
    this.parallax.scrollTo(3);
    this.setState(state => ({
      firstSection: false
    }));
  };

  toggle = e => {
    this.setState(state => ({
      index: state.index === pages.length - 1 ? 0 : state.index + 1,
      initialLoad: false
    }));
  };

  sectionFourScroll = e => {
    this.setState(state => ({
      sectionFour: !this.state.sectionFour
    }));
    console.log(`state updated: ${this.state.sectionFour}`);
  };

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
              <GhostButton onClick={this.firstMove}>
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
            <Waypoint
              onEnter={this.sectionFourScroll}
              onLeave={this.sectionFourScroll}
            />
            <SectionContainerGridTwo>
              <React.Fragment>
                <SubSection>
                  <Spring
                    config={{ tension: 150, friction: 20, delay: 500 }}
                    from={{
                      opacity: 0,
                      transform:
                        "translate3d(0,400px,0) scale(0) rotateY(180deg)"
                    }}
                    to={{
                      opacity: 1,
                      transform: "translate3d(0,0,0) scale(1) rotateY(0deg)"
                    }}
                    reset={this.state.initialLoad}
                  >
                    {props => (
                      <SectionTitle style={props}>
                        Cold-Press Humblebrag
                      </SectionTitle>
                    )}
                  </Spring>
                  <Spring
                    config={{ tension: 150, friction: 20, delay: 750 }}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    reset={this.state.initialLoad}
                  >
                    {props => (
                      <SectionCopy style={props}>
                        Photo booth hashtag gochujang pop-up four dollar toast
                        bushwick truffaut. Cold-pressed semiotics tumblr
                        drinking vinegar schlitz humblebrag man bun.
                      </SectionCopy>
                    )}
                  </Spring>
                </SubSection>
              </React.Fragment>
              <SubSectionTwo onClick={this.toggle}>
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
        {this.state.firstSection === false && (
          <Chevron
            onClick={() => this.parallax.scrollTo(0)}
            color="#dafbf3"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100px"
            height="100px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
          >
            <path
              class="innerPath"
              d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
            />
          </Chevron>
        )}
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

const SectionTitle = styled(animated.h2)`
  color: #dafbf3;
  font-size: 3rem;
  margin: 0;
  padding-bottom: 2rem;
`;

const SectionCopy = styled.h2`
  color: #e3fcf6;
  font-size: 2rem;
  font-weight: 300;
  line-height: 2.8rem;
  margin: 0;
  padding-top: 0;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 1.5rem;
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

const Chevron = styled.svg`
  position: absolute;
  top: 100;
  left: 100;
  z-index: 10;
  fill: ${props => (props.color ? props.color : "#2d2d2d")};
  &:hover {
    cursor: pointer;
    fill: "#2d2d2d";
  }
`;

const SectionContainerGrid = styled.div`
  position: absolute;
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
