import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import BookForm from "./pages/book-form";
import BooksList from "./pages/books-list";
import NavBar from "./pages/navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={BooksList} />
          <Route path="/add-book" component={BookForm} />
        </Switch>
      </Router>
    );
  }
}
