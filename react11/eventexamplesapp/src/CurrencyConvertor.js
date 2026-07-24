import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const amount = Number(this.state.amount);
    const currency = this.state.currency;

    const euro = amount / 90;

    alert(`Converting to ${currency} Amount is ${euro.toFixed(2)}`);
  };

  render() {
    return (
      <div>
        <h1>Currency Convertor!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input
            type="number"
            value={this.state.amount}
            onChange={(event) =>
              this.setState({ amount: event.target.value })
            }
          />

          <br />

          <label>Currency: </label>
          <textarea
            value={this.state.currency}
            onChange={(event) =>
              this.setState({ currency: event.target.value })
            }
          />

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;