import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 600px){
    width: 80%;
    align-self: flex-start;
  }

  @media screen and (min-width: 736px){
    width: 60%;
  }

  @media screen and (min-width: 1366px){
    width: 40%;
  }
`;

const Button = styled.a`
  z-index: 1;
  position: relative;
  color: white;
  text-decoration: none;
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
  padding: 1em 2em;
  margin: 1em;
  border: 2px solid ${props => props.theme.accent};
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  background-color: transparent;
  color: ${props => props.theme.accent};
  transition: all 0.15s ease-in-out;
  transform-style: preserve-3d;

  & > span {
    position: relative;
    z-index: 3;
  }

  &::after {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 0;
    height: 100%;
    background-color: ${props => props.theme.accent};
    transition: all 0.25s ease-out;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (min-width: 736px){
    margin: 0 2em 0 0;
  }
`;

class ProjectLinks extends Component {
  render() {
    return (
      <Wrap>
        <Button href={this.props.links.github} target="_blank" rel="noopener noreferrer">
          <span>GITHUB</span>
        </Button>
        <Button href={this.props.links.live} target="_blank" rel="noopener noreferrer">
          <span>LIVE</span>
        </Button>
      </Wrap>
    );
  }
}

export default ProjectLinks;