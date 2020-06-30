import React from 'react';
import { Link, Router } from '@reach/router';
import HomeComponent from './Components/HomeComponent';
import InputComponent from './Components/InputComponent';
import FormatComponent from './Components/FormatComponent';

const compStyle = {
  textAlign: 'center'
}

function App() {
  return (
    <div style={compStyle}>
        <Link to ="/home">Home</Link>
        <Router>
            <HomeComponent path="/home"/>
            <InputComponent path="/:input"/>
            <FormatComponent path="/:word/:text/:bg"/>
        </Router>
    </div>
  );
}

export default App;

//same component, if and for return