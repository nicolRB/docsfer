using Docsfer.Core.Groups;
using Docsfer.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Docsfer.Api.Repositories;

public class GroupRepository(DocsferDbContext dbContext) : IGroupRepository
{
    public async Task<Group?> FindByIdAsync(Guid id)
    {
        return await dbContext.Groups.SingleOrDefaultAsync(g => g.Id == id);
    }
}