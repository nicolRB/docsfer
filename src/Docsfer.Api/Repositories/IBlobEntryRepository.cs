using Docsfer.Core.Blobs;

namespace Docsfer.Api.Repositories;

public interface IBlobEntryRepository
{
    public BlobEntry[] GetAllInRelation();
}
