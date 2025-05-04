using Docsfer.Core.Blobs;
using Docsfer.Core.Relationships;
using Docsfer.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Docsfer.Api.Repositories;

public class BlobEntryRepository(DocsferDbContext context) : IBlobEntryRepository
{
    public async Task<ICollection<BlobEntry>> GetAllInRelationAsync(Relationship relationship)
    {
        return await context.BlobEntries
            .OrderBy(b => b.CreatedAt)
            .Where(b => b.Relationship == relationship)
            .ToListAsync();
    }
}