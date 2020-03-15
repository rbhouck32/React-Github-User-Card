import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./components/UserCard"

class App extends React.Component {
  state = {
    users: []
  }


  componentDidMount() {
    console.log("rh: App.js: componentDidMount: this.setState");
  fetch("https://api.github.com/users/rbhouck32")
  .then(res => res)
  .then(users => {
    this.setState({ users: users.name });
  })
    
   
 
  }

  

  render () {
      return (
          <div className="App">
            <div className="header">
              <h1>GitHub UserCard</h1>
            </div>
            <div className="Card">
              <UserCard />
            </div>

          </div>
   
    )
  }
  
}
 

export default App;
