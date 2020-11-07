# Flask (sqlite) Book Server

Starting off, run the following commands for the initial setup:
```js
pipenv shell
pipenv install
```

To start the server up run the following inside the pipenv shell:
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