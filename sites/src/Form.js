import React, {Component} from 'react'


export const validate = ({name, lastname,email}) => {

const errors = []
    if (!name) {
      errors.push('Nombre es requerido')
    }
    if (!lastname) {
      errors.push('Apellido es requerido')
    }
    if (!email) {
      errors.push('Email es requerido')
    }
return errors
}



export default class Form extends Component {
    render() {
      const { handleChange, handleSubmit } = this.props
      
      // currying!!!
      // const suma = (a, b) => a + b
      // const sumaCurried = a => b => a + b
  
      return (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange('name')} type='text' placeholder='Nombre' />
          <input onChange={handleChange('lastname')} type='text' placeholder='Apellido' />
          <input onChange={handleChange('email')} type='email' placeholder='Correo' />
          <button type='submit'>Enviar</button>
        </form>
      )
    }
  }
  