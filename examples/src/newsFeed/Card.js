import React, { Component } from 'react';
import logo from './eduardo.jpeg';
import Answer from '../newsFeed/Answer'

export default class Card extends Component {
    render() {
      const { user, profile_picture, message, answers } = this.props
      return(
        <div>
          <div className="card shadow-lg p-3 mb-5 bg-gray rounded">
            <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
            <div className="media text-muted pt-3 text-left">
              <img src={logo} alt="32x32" className="mr-2 rounded img-card" data-holder-rendered="true" />
              <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@{user}</strong>
                {message}
              </p>
            </div>
            {answers && answers.map((y, l) => 
                <Answer key={l} 
                  user={y.user}
                  profile_picture={y.profile_picture}
                  message={y.message}/>)}
          </div>          
        </div>        
      )
    }
  }