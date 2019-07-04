import React from "react";

class Greatest extends React.Component {
  state = {
    greatest: null,
    firstNumber: null,
    secondNumber: null,
    thirdNumber: null
  };

  onFindClick = () => {
    var number1 = this.state.firstNumber;
    var number2 = this.state.secondNumber;
    var number3 = this.state.thirdNumber;

    if (number1 >= number2 && number1 >= number3) {
      this.setState({
        greatest: number1
      });
    } else if (number2 >= number1 && number2 >= number3) {
      this.setState({
        greatest: number2
      });
    } else if (number3 >= number1 && number3 >= number2) {
      this.setState({
        greatest: number3
      });
    }
  };

  render() {
    return (
      <div>
        <p>Enter three numbers:</p>
        <input
          id="1"
          name="first"
          type="number"
          onChange={event => this.setState({ firstNumber: event.target.value })}
        />
        <input
          id="2"
          name="second"
          type="number"
          onChange={event =>
            this.setState({ secondNumber: event.target.value })
          }
        />
        <input
          id="3"
          name="third"
          type="number"
          onChange={event => this.setState({ thirdNumber: event.target.value })}
        />

        <button onClick={this.onFindClick}>Find!</button>

        {this.state.greatest !== null ? (
          <div>
            <p>The greatest number is {this.state.greatest}</p>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Greatest;
