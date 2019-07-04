import React from "react";

class StringCounter extends React.Component {
  state = {
    string: "",
    letters: null
  };

  handleClick = () => {
    var string = this.state.string;
    var _letters = {};

    var word = string.split("");

    for (var i = 0; i < string.length; i++) {
      _letters[word[i]] = (_letters[word[i]] || 0) + 1;
    }

    console.log(_letters);

    this.setState({
      letters: _letters
    });

    console.log(this.state.letters);
  };
  render() {
    return (
      <div>
        <input
          placeholder="Enter a string"
          onChange={event =>
            this.setState({
              string: event.target.value
            })
          }
        />
        <button onClick={this.handleClick}>Count</button>

        {this.state.letters !== null ? (
          Object.keys(this.state.letters).map((keyName, i) => (
            <li key={i}>
              <span className="input-label">
                {keyName}:{this.state.letters[keyName]}
              </span>
            </li>
          ))
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default StringCounter;
