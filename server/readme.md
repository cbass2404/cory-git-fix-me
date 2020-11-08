# Flask (sqlite) Book Server

Starting off, run the following commands in your terminal while in the `server` folder for the initial setup:

```
$ pipenv shell
$ pipenv install
```

To setup the initial and blank database, inside the `server` folder run the following commands:
- if you are not already in your pipenv shell:
```
$ pipenv shell
```
- then the following step by step:
```
$ python
```
This enters you into a python repl
```
$ from app import db
$ db.create_all()
```
This will create the database file in your `server` folder. If it was successful with no errors, you should have a file named `app.sqlite` in your `server` folder.

Run the following in your terminal while inside the `server` folder to start your `server`:

```
$ python app.py
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
  - Requires the full schema of the item to be submitted in the body.

```
http://localhost:5000/add-book
```

- PATCH
  - Requires only the `"book_read": true or false` in the body to update and the id of the item in the address.

```
http://localhost:5000/book-read/<id>
```

- GET
  - requires no body.

```
http://localhost:5000/books
```

- DELETE
  - requires only the id to be called.

```
http://localhost:5000/delete-book/<id>
```
