using Docsfer.Core.Relationships;
using Docsfer.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Docsfer.Api.Repositories;

public class RelationshipRepository(DocsferDbContext context) : IRelationshipRepository
{
    public async Task<Relationship?> Get(Guid from, Guid to)
    {
        return await context.Relationships.SingleOrDefaultAsync(b =>
            (b.PartyOneId == from && b.PartyTwoId == to) ||
            (b.PartyOneId == to && b.PartyTwoId == from));
    }
}