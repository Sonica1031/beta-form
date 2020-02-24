import React from 'react';
import './App.css';
import Form from './Components/Form';
import Nav from './Components/Nav'

function App() {
  return (
    <div className="Container">
      <div className="Nav">
      <Nav />
      </div>
    <div className="App">
      <form name="test" method="POST" data-netlify="true">
      <h1>Does this item from Menu work?</h1>
      <Form />
      <div className="comments">
      <textarea type="text" placeholder="Other information?" />
      </div>
      <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
