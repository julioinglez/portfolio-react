import React from 'react';
import Swiper from 'swiper';
import ProjectShow from '../components/ProjectShow';
import history from '../history';

export default class Formnflow extends React.Component {

  swiperMount = () => {
    this.swiper = new Swiper('.swiper-container', {
      threshold: 0,
      mousewheel: true,
    });

    var swiper = document.querySelector('.swiper-container').swiper
    swiper.prependSlide('<div class="swiper-slide">Slide 0"</div>');
    swiper.allowSlideNext = false

    swiper.on('slideChange', function() {
      history.push('/');
    });
  }

  componentDidMount() {
    this.swiperMount()
  }

  render() {
    return(
      <div className="project-display-container">
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
