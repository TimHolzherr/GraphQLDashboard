var builder = WebApplication.CreateBuilder(args);
builder.Services
    .AddSingleton<Repository>()    
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .UseField<DomainExceptionMiddleware>();

var app = builder.Build();

app.MapGraphQL();

app.Run();