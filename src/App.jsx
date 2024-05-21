import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState((prevState) => ({
      mode: prevState.mode === "dark" ? "light" : "dark",
    }));
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar key={'home'} mode={this.state.mode} toggleMode={this.toggleMode} />
            <Routes>
              <Route
                exact
                path={"/"}
                element={
                  <NewsComponent key='general'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path={"/business"}
                element={
                  <NewsComponent key='business'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path={"/entertainment"}
                element={
                  <NewsComponent key='entertainment'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path={"/health"}
                element={
                  <NewsComponent key='health'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path={"/science"}
                element={
                  <NewsComponent key='science'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path={"/sports"}
                element={
                  <NewsComponent key='sports'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path={"/technology"}
                element={
                  <NewsComponent key='technology'
                    mode={this.state.mode}
                    pageSize={4}
                    country="in"
                    category="technology"
                  />
                }
              />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
