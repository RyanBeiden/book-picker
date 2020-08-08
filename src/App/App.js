import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Book Picker</h2>
        <button className="btn btn-info"><i className="fas fa-crosshairs"></i> I am a button</button>
      </div>
    );
  }
}

export default App;
