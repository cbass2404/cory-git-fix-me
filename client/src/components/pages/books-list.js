import React, { Component } from "react";

import Book from "../books/book";

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      bookOrder: "desc",
    };
  }

  handleBookOrder = () => {
    this.setState(
      (prevState) => ({
        bookOrder: prevState.bookOrder === "desc" ? "asc" : "desc",
      }),
      this.handleGetBooks
    );
  };

  removeBook = (id) => {
    fetch(`http://localhost:5000/delete-book/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log("Book deleted", res);

      this.setState((prevState) => ({
        books: prevState.books.filter((book) => book.id !== id),
      }));
    });
  };

  handleGetBooks = () => {
    fetch(`http://localhost:5000/books?order=${this.state.bookOrder}`)
      .then((res) => res.json())
      .then((data) => this.setState({ books: data }));
  };

  componentDidMount() {
    this.handleGetBooks();
  }

  renderBooks = () => {
    return this.state.books.map((book) => {
      return <Book key={book.id} book={book} removeBook={this.removeBook} />;
    });
  };

  render() {
    return (
      <div className="books-list-wrapper">
        {this.state.books.length ? (
          <div>
            <button className="sorting-btn" onClick={this.handleBookOrder}>
              {this.state.bookOrder === "asc"
                ? "Sort: Ascending"
                : "Sort: Descending"}
            </button>

            <div className="books-list">{this.renderBooks()}</div>
          </div>
        ) : (
          this.props.history.push("/add-book")
        )}
      </div>
    );
  }
}

export default BooksList;
