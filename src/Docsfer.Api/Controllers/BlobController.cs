using System.Security.Claims;
using Azure.Storage.Blobs;
using Docsfer.Core.Exceptions.Blobs;
using Docsfer.Core.Exceptions.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Docsfer.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/v1/blob")]
public class BlobController : ControllerBase
{
    private readonly BlobContainerClient _blobContainerClient;

    public BlobController(IConfiguration configuration)
    {
        var connectionString = configuration["AzureBlobStorage:ConnectionString"];
        var containerName = configuration["AzureBlobStorage:ContainerName"];

        var blobServiceClient = new BlobServiceClient(connectionString);
        _blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);
        _blobContainerClient.CreateIfNotExists();
    }

    [HttpPost("upload")]
    public async Task<IActionResult> Upload(
        [FromForm] IFormFile file,
        [FromForm] string from,
        [FromForm] string to)
    {
        if (file == null || file.Length == 0)
        {
            throw new InvalidFileException();
        }

        var blobName = "TODO: FILENAME";
        var blobClient = _blobContainerClient.GetBlobClient(blobName);

        using var stream = file.OpenReadStream();
        await blobClient.UploadAsync(stream);

        // TODO: send email

        return Created();
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
