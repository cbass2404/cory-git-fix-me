import React, { Component } from "react";

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      url: "",
      genre: "action",
      star_rating: "1",
      book_read: false,
      errorText: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/add-book", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        url: this.state.url,
        genre: this.state.genre,
        star_rating: this.state.star_rating,
        book_read: this.state.book_read,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Success") {
          this.setState({
            title: "",
            author: "",
            url: "",
            genre: "action",
            star_rating: "1",
            book_read: false,
            errorText: "",
          });
          this.props.history.push("/books");
        }
      })
      .catch(() => {
        this.setState({
          errorText: "Something went wrong... Try again later",
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Book title..."
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            placeholder="Author..."
            name="author"
            id="author"
            value={this.state.author}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="url">Url:</label>
          <input
            type="text"
            placeholder="Url..."
            name="url"
            id="url"
            value={this.state.url}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="genre">Genre:</label>
          <select
            name="genre"
            id="genre"
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option value="action">Action</option>
            <option value="fiction">Fiction</option>
            <option value="coding">Coding</option>
            <option value="drama">Drama</option>
          </select>
          <div className="radio-buttons-wrapper">
            <div>Rating:</div>
            <label>
              <input
                type="radio"
                name="star_rating"
                value={"1"}
                checked={this.state.star_rating === "1"}
                onChange={this.handleChange}
              />
              1 Star
            </label>
            <label>
              <input
                type="radio"
                name="star_rating"
                value={"2"}
                checked={this.state.star_rating === "2"}
                onChange={this.handleChange}
              />
              2 Star
            </label>
            <label>
              <input
                type="radio"
                name="star_rating"
                value={"3"}
                checked={this.state.star_rating === "3"}
                onChange={this.handleChange}
              />
              3 Star
            </label>
            <label>
              <input
                type="radio"
                name="star_rating"
                value={"4"}
                checked={this.state.star_rating === "4"}
                onChange={this.handleChange}
              />
              4 Star
            </label>
            <label>
              <input
                type="radio"
                name="star_rating"
                value={"5"}
                checked={this.state.star_rating === "5"}
                onChange={this.handleChange}
              />
              5 Star
            </label>
          </div>
          <button type="submit">Add Book</button>
          {this.state.errorText}
        </form>
      </div>
    );
  }
}

export default BookForm;
