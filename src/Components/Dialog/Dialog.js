import React, { Component } from 'react'

let dialogStyle ={
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    color: 'black',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: 'yellow',
    pading: '10px 20px 30px',
    borderRadius: '6px',
    display: 'none',
    flexDirection: 'column'

};
let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'poiter',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

export default class Dialog extends Component {
    
    render() {
       
        return (
           <div>
            <div style={dialogStyle}>
            <button style={dialogCloseButtonStyles}>x</button>

                {this.props.children}
            </div>
           </div>
        )
    }
}
