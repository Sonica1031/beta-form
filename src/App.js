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
      <form
      action="mailto:sonica1031@hotmail.com"
      method="POST"
      enctype="multipart/form-data">
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
