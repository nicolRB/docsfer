namespace Docsfer.Core.Exceptions.Blobs;

public class InvalidFileException : AppException
{
    
    public InvalidFileException() : base(ExceptionConsts.InvalidFile, 400)
    {
    }
}


