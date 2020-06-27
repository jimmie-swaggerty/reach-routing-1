import React from 'react';

const NumberComponent = (props) => {

    return (
      <div>
       <h1>NumberComponent</h1>
       {props.number}
      </div>
    );
}

export default NumberComponent