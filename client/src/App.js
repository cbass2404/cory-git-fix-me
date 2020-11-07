// import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./home";
import BookForm from "./book-form";
import BooksList from "./books-list";
import NavBar from "./navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  // renderBooks = () => {
  //   return this.state.books.map((book) => {
  //     return <Book book={book} />;
  //   });
  // };

  handleNewBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

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
