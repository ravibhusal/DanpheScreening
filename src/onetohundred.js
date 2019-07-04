import React from "react";

class OneToHundred extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    let lists = this.state.list;

    for (var i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        lists.push("Fizz");
      } else if (i % 5 === 0 && i % 3 !== 0) {
        lists.push("Buzz");
      } else if (i % 5 === 0 && i % 3 === 0) {
        lists.push("FizzBuzz");
      } else {
        lists.push(i);
      }

      this.setState({
        list: lists
      });
    }
  }

  render() {
    return (
      <div style={{ paddingLeft: 50 }}>
        <h1>The list of 1 to 100</h1>
        <ul>
          {this.state.list.map(function(item, i) {
            console.log("test");
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default OneToHundred;
