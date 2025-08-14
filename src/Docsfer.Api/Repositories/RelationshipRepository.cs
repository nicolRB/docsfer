using Docsfer.Core.Extensions;
using Docsfer.Core.Relationships;
using Docsfer.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Docsfer.Api.Repositories;

public class RelationshipRepository(
    DocsferDbContext context,
    IGroupRepository groupRepository) : IRelationshipRepository
{
    public async Task<Relationship?> FindAsync(Guid from, Guid to)
    {
        return await context.Relationships.SingleOrDefaultAsync(b =>
            (b.PartyOneId == from && b.PartyTwoId == to) ||
            (b.PartyOneId == to && b.PartyTwoId == from));
    }

    public async Task<Relationship?> FindByIdAsync(Guid id)
    {
        return await context.Relationships.SingleOrDefaultAsync(b => b.Id == id);
    }

    public async Task InsertAsync(Relationship relationship)
    {
        await context.Relationships.AddAsync(relationship);
        await context.SaveChangesAsync();
    }

    public async Task<bool> IsUserRelatedToRelationship(Guid userId, Relationship relationship)
    {
        if (relationship.PartyOneType == PartyType.User && relationship.PartyOneId == userId)
        {
            return true;
        }

        if (relationship.PartyTwoType == PartyType.User && relationship.PartyTwoId == userId)
        {
            return true;
        }

        if (relationship.PartyOneType == PartyType.Group)
        {
            var group = (await groupRepository.FindByIdAsync(relationship.PartyOneId)).EnsureExists();

            if (group.Users.Any(u => u.Id == userId))
            {
                return true;
            }
        }

        if (relationship.PartyTwoType == PartyType.Group)
        {
            var group = (await groupRepository.FindByIdAsync(relationship.PartyTwoId)).EnsureExists();

            if (group.Users.Any(u => u.Id == userId))
            {
                return true;
            }
        }

        return false;
    }
}