# Flask (sqlite) Book Server

Starting off, run the following commands in your terminal while in the server folder for the initial setup:

```js
pipenv shell
pipenv install
```

Run the following in your terminal while inside the server folder to start your server:

```js
python app.py
```

New submissions must following format:

```json
{
  "title": "string",
  "author": "string",
  "url": "string",
  "genre": "string",
  "star_rating": "string",
  "book_read": boolean
}
```

The following addresses will give access to the CRUD:

- POST

```js
http://localhost:5000/add-book
```

- PATCH

```js
http://localhost:5000/book-read/<id>
```

- GET

```js
http://localhost:5000/books
```

- DELETE

```js
http://localhost:5000/delete-book/<id>
```
