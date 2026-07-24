import React from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert('Hello Member!');
  };

  incrementAndSayHello = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert('I was clicked');
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>

        <button onClick={this.incrementAndSayHello}>
          Increment
        </button>

        <br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br />

        <button onClick={() => this.sayWelcome('welcome')}>
          Say Welcome
        </button>

        <br />

        <button onClick={this.onPress}>
          Click on me
        </button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;