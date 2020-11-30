import React, { Component } from 'react'
export default class details extends Component {
    state = {
        isOpen: false
      };
    render1() {
        return (
            <div>
                <button onClick = {(e) => this.setState({ isOpen: true})}>Open</button>
            </div>
        )
    }
}

