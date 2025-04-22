namespace Docsfer.Api.Helpers;

public static class FormFileExtensions
{
    public static async Task<UploadedFile> ToUploadedFileAsync(this IFormFile formFile)
    {
        using var memoryStream = new MemoryStream();

        await formFile.CopyToAsync(memoryStream);

        return new UploadedFile
        {
            FileName = formFile.FileName,
            ContentType = formFile.ContentType,
            Content = memoryStream.ToArray(),
        };
    }
}