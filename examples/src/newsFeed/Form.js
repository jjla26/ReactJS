import React, { Component } from 'react'

export const validate = ({user, profilePhoto, message}) => {
  const errors = []
  if (!user) {
    errors.push('Usuario es requerido')
  }
  if (!profilePhoto) {
    errors.push('Foto es requerido')
  }
  if (!message) {
    errors.push('Mensaje es requerido')
  }
  return errors
}
export default class Form extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props 
    return(
      <div className="form-row">
        <div className="col-2" />
        <div className="col-8 align-items-left text-left">
        <form onSubmit={handleSubmit} className="shadow-lg p-3 mb-5 bg-white rounded">
          <div className="form-group">
            <label htmlFor="userInput">Usuario</label>
            <input type="input" onChange={handleChange('user')} className="form-control" id="userInput" aria-describedby="userHelp" placeholder="Ingresa tu usuario" />
            <small id="userHelp" className="form-text text-muted">Este será tu usuario.</small>
          </div>
          <div className="form-group">
            <label htmlFor="profilePictureInput">Link de tu Foto</label>
            <input type="text" onChange={handleChange('profilePhoto')} className="form-control" id="profilePictureInput" placeholder="Foto perfíl" />
          </div>
          <div className="form-group">
            <label htmlFor="messageInput">Mensaje</label>
            <textarea className="form-control" onChange={handleChange('message')} rows="5" id="messageInput"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div className="col-2" />
      </div>
    )
  }
}