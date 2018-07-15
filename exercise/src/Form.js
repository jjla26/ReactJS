import React from 'react'


export default class Form extends React.Component{
    render(){
        const { handleChange, handleSubmit } = this.props
        return(
            
                <form onSubmit = {handleSubmit}>
                    <input onChange = {handleChange('message')} placeholder = 'QUE ESTAS PENSANDO ?' />
                    <button  type = 'submit' >Enviar</button>
                </form>
            
        )
    }
}