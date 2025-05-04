using Docsfer.Core.Relationships;

namespace Docsfer.Core.Blobs;

public class BlobEntry
{
    public long? Id { get; set; } = null;

    public Relationship? Relationship { get; set; }

    public string BlobName { get; set; } = Guid.NewGuid().ToString();

    public string FileName { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.Now;
}