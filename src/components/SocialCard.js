import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ff00ae;
  font-size: 3em;
  color: white;
`;

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;

  & > a {
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: black;
    }
  }
`;

class SocialCard extends Component {
  render() {
    return (
      <Wrap>
        <InnerWrap>

          <a href="http://www.github.com/dustwise" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true"/>
          </a>

          <a href="http://www.linkedin.com/in/jaredmohney" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"/>
          </a>

          <a href="mailto:jared.mohney@gmail.com?Subject=Hello%20Jared" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope" aria-hidden="true"/>
          </a>

        </InnerWrap>
      </Wrap>
    );
  }
}

export default SocialCard;