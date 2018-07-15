import React from 'react'

const style = {
    container:{
        backgroundColor: '#eee',
        border: 'solid 1px black',
        borderRadius: '4px',
        padding: '15px',
    }
}

export default class Content extends React.Component{
    render(){
        return(
            <div style={style.container}>
            {this.props.children}
            </div>
        )
    }
}