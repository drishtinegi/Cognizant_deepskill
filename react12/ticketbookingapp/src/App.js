import React from 'react';

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <button>Logout</button>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <button>Login</button>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome back</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Please sign up.</h1>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;