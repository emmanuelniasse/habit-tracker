## Description

_Habit tracker API_

The objective is to provide a robust backend system that allows users to create, update, and delete their habits, as well as track their progress over time.

With features like authentication, data persistence, and real-time updates powered by a PostgreSQL database and Prisma ORM,

## Installation

```bash
$ npm ci
```

## Configuration

Before running the application, you need to set up your environment variables:

1. Copy the `.env_example` file and rename the copy to `.env`:

```bash
$ cp .env_example .env
```

## Running the app

```bash
# watch mode
$ npm run dev

```

## Routes

### Auth

- POST /auth/register
  Description : Signup
  Authentification required : No
  Request body :

  - email
  - password
  - name
    Response : User detail (id, email, password, name)

- POST /auth/login
  Description : Login
  Authentification required : No
  Request body :
  - email
  - password
    Response : Access token

### Users

- GET /users
  Description : Get all users
  Authentification required : Yes
  Parameters : No
  Response : Users list with details (id, email, password, name)

- GET /users/:id
  Description : Get a user
  Authentification required : Yes
  Parameters : - id
  Response : User details (id, email, password, name)

- PATCH /users/:id
  Description : Update a user
  Authentification required : Yes
  Parameters : - id
  Response : User updated

- DELETE /users/:id
  Description : Delete a user
  Authentification required : Yes
  Parameters : - id
  Response : void

### Habits

- POST /habits
  Description : Create a user habit
  Authentification required : Yes
  Request body : - id - label - description - completed - authorId
  Response : Created habit detail

- GET /habits
  Description : Get the user's habits list
  Authentification required : Yes
  Parameters : No
  Response : Habits list with details (id, label, description, completed, authorId)

- GET /habits/:id
  Description : Get a user habit
  Authentification required : Yes
  Parameters : - id
  Response : Habit details (id, label, description, completed, authorId)

- PATCH /habits/:id
  Description : Update a user habit
  Authentification required : Yes
  Parameters : - id
  Response : User habit updated

- DELETE /habits/:id
  Description : Delete a user habit
  Authentification required : Yes
  Parameters : - id
  Response : void
