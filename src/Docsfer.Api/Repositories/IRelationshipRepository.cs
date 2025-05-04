using Docsfer.Core.Relationships;

namespace Docsfer.Api.Repositories;

public interface IRelationshipRepository
{
    public Task<Relationship?> Get(Guid from, Guid to);
}

