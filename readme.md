# GraphQL Dashboard 

*The 'Swagger UI' for GraphQL*

The GraphQL Dashboard is intended as a simple user interface that a non-technical person can use to perform queries and mutations.  
A form for entering the input for these operations is generated dynamically based on the GraphQL schema.


## Development

1) Run the next.js app with `cd src && yarn install && yarn dev`
2) Make sure that a GraphQL backend is running on http://localhost:54321. 


A HotChocolate example backend is provided under `examples/simpleBackend` and can be started with `cd examples/simpleBackend && dotnet run .`
