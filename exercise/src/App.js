import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import Card from './Card.js'
import data from './data.js'

//estilos133
const style= {
  Container:{
    backgroundColor: '#fff',
 
    padding : '15px',
  },
  
  imag:{
    width : '50px',
    height : '50px',
  }

}


class App extends Component {



state = {
  
  form:{
      user : 'Julio',
      profile_picture: 'https://www.abc.es/media/recreo/2018/03/28/gallo-kY5--620x349@abc.jpg',
      message : '',

  },
  data : data,
  errors : [],

}

handleChange = field => e => {
this.setState({
    form:{      
      ...this.state.form,
      [field] : e.target.value,
            
    }    
  }
)

}

handleSubmit = e => {
  e.preventDefault()
  e.target.reset()
  
  const { form } = this.state
  const errors = []

  this.setState({
    data : [form].concat(this.state.data),
    ...this.state.form,
    message: '',
  })
  
  
  if(errors.length > 0){
    return
  }


  
}

  render() {

    const { errors } = this.state
    return (
      <div style={style.Container}>
        <Card>
        
          <Form 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          />
        </Card>

        <ul>
            {errors.map((w,i) => <li key = {i}>{w}</li>)}
        </ul>
        
          
         {this.state.data.map((x,i) => <Card key={i}>
         <h1>{x.user}</h1>
         <img style= {style.imag} src={x.profile_picture} alt= 'hola' />
         <p>{x.message}</p>
         {x.answer && x.answer.map((y,i) => <Card key={i}>
         <h1>{y.user}</h1>
         <img style = {style.imag} src={y.profile_picture} alt= 'hola'/>
         <p>{y.message}</p>
         </Card>)}
         </Card>)}      
                  
      </div>
    );
  }
}


export default App;
