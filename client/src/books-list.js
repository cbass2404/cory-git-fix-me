import React, { Component } from "react";
import Book from "./book";

export default class BooksList extends Component {
  constructor() {
    super();
    this.state = {
      books: null,
    };
  }

  renderBooks = () => {
    return this.state.books.map((book) => {
      return <Book key={book.id} book={book} />;
    });
  };

  componentDidMount() {
    // fetch("http://localhost:5000/books?order=desc")
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => this.setState({books: data}));
  }

  render() {
    return (
      <div>
        <h1>Hi from books</h1>
        {this.renderBooks()}
      </div>
    );
  }
}
