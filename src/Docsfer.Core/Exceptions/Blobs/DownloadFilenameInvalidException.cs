namespace Docsfer.Core.Exceptions.Blobs;

public class DownloadFilenameInvalidException : AppException
{
    
    public DownloadFilenameInvalidException() : base(ExceptionConsts.DownloadFilenameInvalid, 400)
    {
    }
}

