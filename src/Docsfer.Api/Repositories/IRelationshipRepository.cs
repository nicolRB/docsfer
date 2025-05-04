using Docsfer.Core.Relationships;

namespace Docsfer.Api.Repositories;

public interface IRelationshipRepository
{
    public Task<Relationship?> FindAsync(Guid from, Guid to);
    public Task InsertAsync(Relationship relationship);
}

