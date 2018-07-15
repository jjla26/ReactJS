import React, { Component } from 'react';
import './App.css';


class Counter extends React.Component{
  constructor(props){
      super(props)
      //initial state set up
      this.state = {value:0}
  }
  componentDidMount(){
      //updating state
      this.setState({value:this.state.value+1})
      this.setState({value:this.state.value+1})
      this.setState({value:this.state.value+1})
      this.setState({value:this.state.value+1})
  }
  render(){
      return <div>Message:{this.state.value}</div>
  }
}

class App extends Component {
  
  render() {
    
    return (
      <div className="App container">
          <Counter/>

      </div>
    );
  }
}

export default App;
