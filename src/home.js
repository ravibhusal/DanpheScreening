import React from "react";

import { withRouter } from "react-router-dom";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Danphe Screening</h1>
        <p>Find the greatest number among three</p>
        <p>
          <button onClick={() => this.props.history.push("/greatest/")}>
            Find!
          </button>
        </p>

        <p>List 1-100</p>

        <button onClick={() => this.props.history.push("/list/")}>List</button>

        <p>
          Count the strings!
          <p>
            <button onClick={() => this.props.history.push("/counter/")}>
              Count!
            </button>
          </p>
        </p>
      </div>
    );
  }
}

export default withRouter(Home);
