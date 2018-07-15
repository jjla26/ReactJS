import React, { Component } from 'react';
import logo from './eduardo.jpeg';

export default class Answer extends Component {
    render() {
      const { user, profile_picture, message } = this.props  
      return(
        <div className="media text-muted pt-3 text-left answer-div">
          <img src={logo} alt="32x32" className="mr-2 rounded img-card" data-holder-rendered="true" />
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@{user}</strong>
            {message}
          </p>
        </div>
      )
    }
  }