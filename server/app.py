from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Book(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  author = db.Column(db.String(100), nullable=False)
  url = db.Column(db.String(100), nullable=False)
  genre = db.Column(db.String(100), nullable=False)
  star_rating = db.Column(db.String(100), nullable=False)
  book_read = db.Column(db.Boolean)


class bookSchema(ma.Schema):
  class Meta:
    fields = ("id", "title", "author", "url", "genre", "star_rating", "book_read")

book_schema = bookSchema()
books_schema = bookSchema(many=True)

# POST
@app.route("/add-book", methods=["POST"])
def add_book():
  title = request.json["title"]
  author = request.json["author"]
  url = request.json["url"]
  genre = request.json["genre"]
  star_rating = request.json["star_rating"]
  book_read = request.json["book_read"]
  new_book = Book(titles=title, author=author, url=url, genre=genre, star_rating=star_rating, book_read=book_read)
  db.session.add(new_book)
  db.session.commit()
  return jsonify(message="Success")


# GET
@app.route("/books", methods=["GET"])
def get_books():
  order = request.args.get('order')
  if (order == 'desc'):
    all_books = Book.query.order_by(Book.id.desc()).all()
  else:
    all_books = Book.query.all()
  result = books_schema.dump(all_books)
  return jsonify(result)


# PUT/PATCH by ID
@app.route("/book-read/<id>", methods=["PATCH"])
def update_book(id):
  book = Book.query.get(id)
  book.book_read = request.json["bookread"]
  db.session.commit()
  return jsonify(message="Book Updated")


# DELETE
@app.route("/delete-book/<id>", methods=["DELETE"])
def delete_book(id):
  book = book.query.get(id)
  db.session.delete(book)
  db.session.commit()
  return jsonify(message="Book Deleted!")


if __name__ == "__main__":
  app.debug = True
  app.run()