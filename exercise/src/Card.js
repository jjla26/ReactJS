import React from 'react'


const style ={
    Card:{
        backgroundColor: '#eee',
        borderRadius: '4px',
        border: 'solid 1px black',
        padding: '15px',
        margin: '20px',
    } 
}

export default class Card extends React.Component{
    render(){
        return(
            <div style = {style.Card}>
            {this.props.children}
            </div>
             
        )
    }
}