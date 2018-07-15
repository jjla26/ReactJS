import React from 'react'

export default class TabsBlock extends React.Component{
    render(){
        return(
            <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a onClick = {handleClick('link1')} class="nav-link active" href="#">Active</a>
                </li>
                <li class= "nav-item">
                  <a onClick = {handleClick('link2')} class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a onClick = {handleClick('link3')} class="nav-link" href="#">Link</a>
                </li>
            </ul>

        )
    }
}