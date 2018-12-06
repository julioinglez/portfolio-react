import React from 'react';
import Swiper from 'swiper';
import ProjectShow from '../components/ProjectShow';

export default class Formnflow extends React.Component {
  componentDidMount() {
     var swiper = new Swiper('.swiper-container', {
       threshold: 15,
     });
  }

  render() {
    return(
      <div className="project-show-container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ProjectShow project="formnflow" projectTitle="Formnflow" projectLink="Home" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
