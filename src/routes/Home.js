import React from 'react';
import ProjectDisplay from '../components/ProjectDisplay'

export default class Home extends React.Component {
  render() {
    return(
      <div className="project-display-container">
        <ProjectDisplay project="home" projectTitle="Home" />
        <ProjectDisplay project="formnflow" projectTitle="Formnflow" />
        <ProjectDisplay project="hatcher" projectTitle="Hatcher" />
        <ProjectDisplay project="nexus-pattern" projectTitle="Nexus Pattern" />
        <ProjectDisplay project="speedy-vocab" projectTitle="Speedy Vocab" />
      </div>
    )
  }
}
