import React from "react";

import "./App.css";
import UserCard from "./components/UserCard";
import UserInput from "./components/UserInput";
import FollowerCard from "./components/FollowerCard";
import { Card, FollowerCardWrap, Paragraph } from "./Style";

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
    user: {},
    followers: [],
    userSearch: ""
  };

  onSearch = user => {
    this.setState({ ...this.state, userSearch: user });
  };

  getUser = user => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(user => {
        console.log("componentDidMount JSON res", user);
        this.setState({ ...this.state, user: user });
      })
      .catch(err => {
        console.error(err);
        this.setState({ followers: [] });
      });
  };

  // componentDidMount() {
  //   this.getUser();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userSearch !== prevState.userSearch) {
      this.handleFetchUser(this.state.userSearch);
      this.getUser(this.state.userSearch);
    }
  }

  handleFetchUser = user => {
    fetch(`https://api.github.com/users/${user}/followers`)
      .then(res => res.json())
      .then(users => {
        console.log("handleFetchUser response: ", users);
        this.setState({ ...this.state, followers: users }, () =>
          console.log(this.state)
        );
      })
      .catch(err => {
        console.error(err);
        this.setState({ followers: [] });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>GitHub UserCard</h1>
          <UserInput onSearch={this.onSearch} />
        </div>
        <Card>
          {this.state.userSearch === "" ? (
            <Paragraph>Search for a Github member!</Paragraph>
          ) : (
            <UserCard user={this.state.user} />
          )}
        </Card>
        <FollowerCardWrap className="followerCard">
          {this.state.followers.map(follower => (
            <FollowerCard user={follower} key={follower.id} />
          ))}
        </FollowerCardWrap>
      </div>
    );
  }
}

export default App;
