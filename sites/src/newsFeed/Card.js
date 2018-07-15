import React from 'react';
import foto from './fotorc.png'
import data from './data.js'
const style = {
    width : '18rem'
    
}

export default class Card extends React.Component{
    
    render(){
        const {user, profile_picture, message} = this.props
        return(
            <div class="card" style={style}>
              <img class="card-img-top" src={foto} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">{user}</h5>
                <p class="card-text">{message}</p>
            </div>
            </div>

        )
    }
}
