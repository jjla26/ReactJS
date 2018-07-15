import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js'
import Content from './Content.js'
import data from './Text.js'

//practica


class App extends Component {

  state = {

    data: data,
    a : '',
  }
  
  handleClick = tab => e =>{
    
 
    if(tab=== 't1'){
    this.setState({a : this.state.data[0].Texto1})  
    }
    if(tab=== 't2'){
    this.setState({a : this.state.data[1].Texto2})
    }
    if(tab=== 't3'){
    this.setState({a : this.state.data[2].Texto3})
    }
 
  }

  render() {
    const {a} =  this.state
    return (
      
      
      <div>
        <Tabs
        handleClick = {this.handleClick}/>
        <Content>
          {a}  
        </Content>
      
      </div>
    );
  }
}


export default App;
