import React from 'react';

const FormatComponent = (props) => {
    const style = {
        backgroundColor: props.bg,
        color: props.text,
        padding: '20px',
        fontSize: '20px'
    }
    return (
      <div style={style}>
       The word is: {props.word}
      </div>
    );
}

export default FormatComponent