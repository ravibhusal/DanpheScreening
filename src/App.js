import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BaseRouter from "./routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <BaseRouter {...this.props} />
        </Router>
      </div>
    );
  }
}

export default App;
