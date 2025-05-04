using Azure.Storage.Blobs;
using Docsfer.Api.Repositories;
using Docsfer.Core.Blobs;
using Docsfer.Core.Exceptions.Blobs;
using Docsfer.Core.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Docsfer.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/v1/blob")]
public class BlobController : ControllerBase
{
    private readonly BlobContainerClient _blobContainerClient;
    private readonly IRelationshipRepository _relationshipRepository;
    private readonly IBlobEntryRepository _blobEntryRepository;

    public BlobController(
        IConfiguration configuration,
        IRelationshipRepository relationshipRepository,
        IBlobEntryRepository blobEntryRepository)
    {
        var connectionString = configuration["AzureBlobStorage:ConnectionString"];
        var containerName = configuration["AzureBlobStorage:ContainerName"];

        var blobServiceClient = new BlobServiceClient(connectionString);
        _blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);
        _blobContainerClient.CreateIfNotExists();

        _relationshipRepository = relationshipRepository;
        _blobEntryRepository = blobEntryRepository;
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload(
        [FromForm] IFormFile file,
        [FromForm] Guid from,
        [FromForm] Guid to)
    {
        if (file == null || file.Length == 0)
        {
            throw new InvalidFileException();
        }

        using var stream = file.OpenReadStream();

        var relationship = (await _relationshipRepository.FindAsync(from, to)).EnsureExists();

        var blobEntry = new BlobEntry
        {
            FileName = file.FileName,
            Relationship = relationship,
        };

        await _blobEntryRepository.InsertAsync(blobEntry);

        var blobName = $"{relationship.Id}/{blobEntry.BlobName}.file";
        var blobClient = _blobContainerClient.GetBlobClient(blobName);

        await blobClient.UploadAsync(stream);

        return Ok(new
        {
            blobName,
        });
    }

    [HttpPost("download")]
    public async Task<IActionResult> Download([FromQuery] string filename)
    {
        if (string.IsNullOrWhiteSpace(filename))
        {
            throw new DownloadFilenameInvalidException();
        }

        return Ok();
    }
}
