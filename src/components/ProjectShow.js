import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ProjectShow extends React.Component {
  render() {
    return(
      <div className={'project-show ' + this.props.project}>
        <h1>{this.props.project}</h1>
        <NavLink exact to="/" activeClassName="active" className={this.props.project}>{this.props.projectLink}</NavLink>
      </div>
    )
  }
}
