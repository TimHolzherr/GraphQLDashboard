# GraphQL Dashboard

## Development
For development run `yarn dev` and make sure that a backend is running at http://localhost:54321/graphql.
Example backends can be found under `/examples.`

## Production
We use next.js as a static site generater.
Run `yarn build` to generate the static assets.
The backend, which is responsible for authentication and authorization, will serve these static files.

