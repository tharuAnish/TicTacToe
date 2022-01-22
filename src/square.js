import React, { Component } from 'react';
import './index.css'

class Square extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='square' onClick={this.props.whenButtonClicked}>{this.props.value}</div>
          );
    }
}
 
export default Square;