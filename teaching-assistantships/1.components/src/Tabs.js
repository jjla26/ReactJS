import React from 'react'

export default class TabsBlock extends React.Component{
    render(){
        const { handleClick } = this.props
        return(
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a onClick = {handleClick('t1')} className="nav-link">TEXTO 1</a>
              </li>
              <li className="nav-item">
                <a onClick = {handleClick('t2')} className="nav-link">TEXTO 2</a>
              </li>
              <li className="nav-item">
                <a onClick = {handleClick('t3')}  className="nav-link">TEXTO 3</a>
              </li>

            </ul>

        )
    }
}