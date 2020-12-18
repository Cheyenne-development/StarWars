import React, { Component } from 'react';
import './DisplayResults.css';



class DisplayResults extends Component {

    createNameList = () => {
            return this.props.display.names.map((name, idx) => (
            <li key={idx} name='selection-name' id='name'>
                {name}
            </li> 
    ))
    }


    render(){
       return(
       <>
       <div className='result-count'>
{(this.props.display.names.length !== 0) && (<span className='display-result-count'>Number of {this.props.searched} located: {this.props.display.count}</span>)}
        </div>
        <div className='result-name'>
        <ul>
         {this.createNameList()}
        </ul>
        </div>
        </>
    ) 
}
}

export default DisplayResults