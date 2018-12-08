import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ProjectDisplay extends React.Component {
  render() {
    return(
      <div className={'project-display ' + this.props.project}>
        <NavLink exact to="/formnflow" activeClassName="active" className={this.props.project} data-reload="true">{this.props.projectTitle}</NavLink>
      </div>
    )
  }
}
