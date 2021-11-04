import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  /* You have to write it this way using an arrow function */
  addOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return (
      <div className="App">
        <div>The count is currently: { this.state.count } </div>
        <button onClick={ this.addOne }>Add 1 to the count</button>
      </div>
    )
  }
}

export default App;
