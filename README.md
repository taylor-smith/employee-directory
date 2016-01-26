# OnPrem Front End "Homework" Assignment

Using the API provided in this repository, create a client-side application that can be used to add/edit/remove employees from the faux employee database.

## Rules/Guidelines
- *Cannot* use frameworks (Angular/Ember/Backbone/etc)
- *Cannot* use libraries (lodash/jQuery/React/etc)
- *Cannot* use CSS Preprocessor (SASS/Less/Stylus/PostCSS/etc)
- *Can* use any DOM APIs/CSS features that are supported in the latest stable versions of Chrome *and* Firefox

## Prerequisites
- node.js version >= `4.0.x`

## Getting Started
1. Clone the repository
2. Run `npm install` in the root of the repository

## Starting/Using the API
1. Run `npm run local`
2. The API will be available at `http://localhost:3000/employees`

### Endpoints
- `GET`: `/employees`
    - Returns an array of all employees
- `POST`: `/employees`
    - Add a new employee
    - Request body should be an employee object (see src/db/employee-data.json for example)
- `PATCH`: `/employees/{id}`
    - Edit an employees details
- `DELETE`: `/employees/{id}`
    - Delete an employee

## Writing your Client-Side App
The entry point to the application is `client/index.html`, and can be accessed from `http://localhost:3000`. You can add any files/directories you need in the `client` directory, using the folder structure of your preference. All static assets in `client` are served by the same server that is started when you run the API.
