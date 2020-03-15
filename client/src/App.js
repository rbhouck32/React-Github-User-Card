import React from 'react';

import './App.css';
import UserCard from "./components/UserCard"
import UserInput from './components/UserInput';


// const Dummy_Data =  {
// 	avatar_url: "",
// 	name: "Rob Houck",
// 	location: "Cleveland, OH",
// 	followers: 10,
// 	public_repos: 33,
// 	url: "https://api.github.com/users/rbhouck32",
// 	created_at: "2019-08-10T16:03:03Z",
// 	html_url: "https://github.com/rbhouck32",
// 	bio: "excited to learn and grow"
// };




class App extends React.Component {
  state = {
    users: [],
    userSearch: ""
  }


  componentDidMount() {
    fetch("https://api.github.com/users/rbhouck32")
    .then(res => res)
    .then(users => {
      this.setState({users: users.name})
    } 
      
    )    
    .catch(err => {
       console.error(err);
       this.setState({users: []});
    });
};

handleChanges = e => {
  this.setState({...this.state, userSearch: e.target.value});
};

handleFetchUser = e => {
  e.preventDefault();
  fetch(`https://api.github.com/users/${this.state.userSearch}/followers`)
  .then(res => res)
  .then(users => {
    if(users.status === "success"){
      this.setState({users: users.name});
    }
    })
  .catch(err => {
    console.error(err);
    this.setState({ users: []});
  });
}

  

  render () {
      return (
          <div className="App">
            <div className="header">
              <h1>GitHub UserCard</h1>
              <UserInput handleChanges={this.handleChanges} handleFetchUser={this.handleFetchUser}/>
            </div>
            {/* {this.state.users.map(user => (
                <UserCard user={this.userSearch} />
              ))} */}
              
            

          </div>
   
    )
  }
  
}
 

export default App;
