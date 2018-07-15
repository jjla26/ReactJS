import React, { Component } from 'react';
import data from './newsFeed/data.js';
import './App.css';
import foto from './newsFeed/fotorc.png'
import Card from './newsFeed/Card.js'
import Form from './newsFeed/Form.js'



class App extends Component {

  state = {
    form:{
      user:'Julio',
      profile_picture:{foto},
      message:'jejejeje',
    },

    data: data,

  }
  
  render() {
    

    return (
      
      <div className="App container">
        <Form/>

        {this.state.data.map(x =>
        <Card user = {x.user}
        profile_picture = {x.profile_picture}
        message = {x.message}/>
        )}
        

      </div>
    );
  }
}

export default App;