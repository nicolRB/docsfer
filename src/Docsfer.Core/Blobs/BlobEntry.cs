namespace Docsfer.Core.Blobs;

public class BlobEntry
{
    public long? Id { get; set; } = null;

    public Guid From { get; set; } = Guid.Empty;

    public Guid To { get; set; } = Guid.Empty;

    public string BlobName { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.Now;
}