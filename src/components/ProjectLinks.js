import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 45%;
  padding: 1em 0;
  margin: 0;

  font-family: 'Roboto Slab', serif;

  border: 2px solid ${props => props.theme.accent};

  transition: all 0.25s ease-out;

  text-decoration: none;
  cursor: pointer;

  & > span {
    color: ${props => props.theme.accent};

    transition: all 0.25s ease-out;
  }

  &::after {
    position: absolute;
    width: 0%;
    height: 0.2em;
    left: 0;
    bottom: 0;

    content: '';

    background-color: ${props => props.theme.accent};

    transition: all 0.25s ease-out;
  }

  &:hover {
    border: 2px solid transparent;

    & > span {
      color: ${props => props.theme.primary};
    }

    &::after {
      width: 100%;
      
      background-color: ${props => props.theme.primary};
    }
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