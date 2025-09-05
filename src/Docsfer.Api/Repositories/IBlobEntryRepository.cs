using Docsfer.Core.Blobs;
using Docsfer.Core.Relationships;

namespace Docsfer.Api.Repositories;

public interface IBlobEntryRepository
{
    public Task<ICollection<BlobEntry>> GetAllInRelationAsync(Relationship relationship);
    public Task InsertAsync(BlobEntry blobEntry); 
    Task<BlobEntry?> FindByIdAsync(long id);
}
