import React, { Component } from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';
import ProjectStack from './ProjectStack';
import ProjectLinks from './ProjectLinks';
import ProjectFeatures from './ProjectFeatures';


const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding-bottom: 7em;
  // background-color: ${props => props.color};
`;

const InnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 95%;
`;

const TopInfo = styled.div`
  align-self: flex-start;
  margin-bottom: 2em;

  & > div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    & > h2 {
      font-size: 2em;
      margin: 0;
      padding: 0;
    }

    & > h3 {
      font-size: 1em;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }
  }
`;

class ProjectCard extends Component {
  render() {
    const { backgroundColor, title, tagline, images, stack, links, features } = this.props.data;

    return (
      <Wrap color={ backgroundColor }>
        <TopInfo>
          <div>
            <h2>{ title }</h2>
            <h3>{ tagline }</h3>
          </div>
        </TopInfo>
        <InnerWrap>
          <ImageSlider images={ images } />
          <ProjectStack stack={ stack } />
          <ProjectFeatures features={ features }/>
          <ProjectLinks links={ links } />
        </InnerWrap>
      </Wrap>
    );
  }
}

export default ProjectCard;