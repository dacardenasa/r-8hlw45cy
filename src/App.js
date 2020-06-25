import React, { Component } from 'react';
import './App.css';

const paragraph = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

class App extends Component {

  constructor(){
    super();
    this.showText = this.showText.bind(this);

    this.state = {
      terms: false
    }
    
  }

  render() {
    return (
      <div className="wrapper">
        <label>
          <input type="checkbox" onClick={this.showText} /> Mostrar información importante
          { this.state.terms ? paragraph : null }
        </label>
      </div>
      
    );
  }

  showText(e){
    this.setState({
      terms: !this.state.terms
    });
  }
}

export default App;
