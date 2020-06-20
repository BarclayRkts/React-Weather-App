import React, { Component } from 'react'
import './Display.css';

class Display extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <span className='data two'>{this.props.name}, {this.props.country}</span>
                    <span className='data temp'>{this.props.temp} °F</span>
                </div>
            </div>
        )
    }
}
export default Display;