import React from 'react'

const styles  =  {
    card : {
        backgroundColor: '#E5E5E5',
        border: 'solid 1px #DBDBDB',
        borderRadius: '4px',
        padding: '15px',
        margin: '20px',

    }
}

export default class Card extends React.Component{
    render(){
        return(
            <div className="card shadow-lg p-3 mb-5 bg-gray rounded">
                <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
                <div className="media text-muted pt-3 text-left">
                   
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">"HOLA"</strong>
                    </p>
                </div>
            </div>
        )
    }
}