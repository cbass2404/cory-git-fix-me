import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookRead: this.props.book.book_read,
    };
  }

  handleBookRead = () => {
    fetch(`http://localhost:5000/book-read/${this.props.book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        book_read: !this.state.bookRead,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Book Updated") {
          console.log("hi");
          this.setState({ bookRead: !this.state.bookRead });
        }
      });
  };

  render() {
    const { title, star_rating, author, genre, url } = this.props.book;

    return (
      <div>
        <h2>{title}</h2>
        <div>{star_rating}&#9734;</div>
        <div>{author}</div>
        <div>{genre}</div>
        {this.state.bookRead ? "Book Finished" : "Need To Read"}
        <input
          type="checkbox"
          checked={this.state.bookRead}
          onChange={this.handleBookRead}
        />
        <a href={url} target="_blank">
          Learn More {`>>`}
        </a>
      </div>
    );
  }
}
