import React from 'react';

  const style = {
      padding: '20px',
      fontSize: '20px'
  }

const WordComponent = (props) => {
    return (
      <div style={style}>
        The word is: {props.word}
      </div>
    );
}

export default WordComponent