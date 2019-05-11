import React from 'react';
import Swiper from 'swiper';
import ProjectDisplay from '../components/ProjectDisplay';

export default class Home extends React.Component {
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      threshold: 15,
      loop: true,
      mousewheel: true,
      keyboard: true,
    });
  }

  render() {
    return(
      <div className="project-display-container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ProjectDisplay project="home" projectTitle="Home" />
            </div>
            <div className="swiper-slide">
              <ProjectDisplay project="formnflow" projectTitle="Formnflow" />
            </div>
            <div className="swiper-slide">
              <ProjectDisplay project="hatcher" projectTitle="Hatcher" />
            </div>
            <div className="swiper-slide">
              <ProjectDisplay project="nexus-pattern" projectTitle="Nexus Pattern" />
            </div>
            <div className="swiper-slide">
              <ProjectDisplay project="speedy-vocab" projectTitle="Speedy Vocab" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
