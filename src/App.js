import React from 'react';
import { Link, Router, navigate } from '@reach/router';
import HomeComponent from './Components/HomeComponent';
import WordComponent from './Components/WordComponent';
import NumberComponent from './Components/NumberComponent';
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
            <WordComponent path="/:word"/>
            <NumberComponent path="/:number"/>
            <FormatComponent path="/:word/:text/:bg"/>
        </Router>
    </div>
  );
}

export default App;
