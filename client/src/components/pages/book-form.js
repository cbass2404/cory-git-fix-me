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
      method: "POST",
      headers: { "content-type": "application/json" },
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
        console.log(data);

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
        <form className="book-form-wrapper" onSubmit={this.handleSubmit}>
          <div className="info-wrapper">
            <div className="input-wrapper">
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
            </div>
            <div className="input-wrapper">
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
            </div>
            <div className="input-wrapper">
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
            </div>
          </div>
          <div className="genre-wrapper">
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
          </div>
          <div className="radio-buttons-wrapper">
            <div>Rating:</div>
            <div className="radio-buttons">
              <label className="radio">
                1 Star
                <input
                  type="radio"
                  name="star_rating"
                  value={"1"}
                  checked={this.state.star_rating === "1"}
                  onChange={this.handleChange}
                />
              </label>
              <label className="radio">
                2 Star
                <input
                  type="radio"
                  name="star_rating"
                  value={"2"}
                  checked={this.state.star_rating === "2"}
                  onChange={this.handleChange}
                />
              </label>
              <label className="radio">
                3 Star
                <input
                  type="radio"
                  name="star_rating"
                  value={"3"}
                  checked={this.state.star_rating === "3"}
                  onChange={this.handleChange}
                />
              </label>
              <label className="radio">
                4 Star
                <input
                  type="radio"
                  name="star_rating"
                  value={"4"}
                  checked={this.state.star_rating === "4"}
                  onChange={this.handleChange}
                />
              </label>
              <label className="radio">
                5 Star
                <input
                  type="radio"
                  name="star_rating"
                  value={"5"}
                  checked={this.state.star_rating === "5"}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          <div className="btn-wrapper">
            <button type="submit">Add Book</button>
          </div>
          <div className="error-wrapper">{this.state.errorText}</div>
        </form>
      </div>
    );
  }
}

export default BookForm;
