using HotChocolate.AspNetCore.Authorization;

public class Mutation
{    
    public async Task<AuthorPayload> AddAuthor(AuthorInput input, [Service] Repository repository)
    {
        var author = new Author(Guid.NewGuid(), input.Name);
        await repository.AddAuthor(author);
        return new AuthorPayload(author);
    }

    public async Task<BookPayload> AddBook(BookInput input, [Service] Repository repository)
    {
        var author = await repository.GetAuthor(input.Author) ??
                        throw new AuthorNotFoundException("Author not found");
        var book = new Book(Guid.NewGuid(), input.Title, author);
        await repository.AddBook(book);
        return new BookPayload(book);
    }

    public Task<string> AddLibrary(string name, string? description) 
    {
        return Task.FromResult("foo");
    }
}

public record BookPayload(Book? Record, string? Error = null) : Payload(Error);
public record BookInput(string Title, Guid Author);
public record AuthorPayload(Author? Record, string? Error = null) : Payload(Error);
public record AuthorInput(string Name, Address Street1, Address Street2);
public record Address(string Street, string ZipCode, string City);
public record Payload(string? Error);