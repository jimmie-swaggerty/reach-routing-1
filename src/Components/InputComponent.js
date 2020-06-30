import React from 'react';

  const style = {
      padding: '20px',
      fontSize: '20px'
  }

function InputComponent(props) {
    
      if(isNaN(props.input)){
      return (
        <div style={style}>
        The word is: {props.input}
      </div>
      )
    }
    else {
      return (
        <div style={style}>
        The number is: {props.input}
        </div>
      )
    }


}

export default InputComponent