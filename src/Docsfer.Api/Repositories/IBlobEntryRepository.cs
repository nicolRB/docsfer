using Docsfer.Core.Blobs;
using Docsfer.Core.Relationships;

namespace Docsfer.Api.Repositories;

public interface IBlobEntryRepository
{
    public Task<ICollection<BlobEntry>> GetAllInRelationAsync(Relationship relationship);
    public Task<BlobEntry?> GetBlobByFileName(Relationship relationship, string fileName);
    public Task InsertAsync(BlobEntry blobEntry);
    public Task UpdateAsync(BlobEntry blobEntry);
}
