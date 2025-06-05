namespace Docsfer.Core.Exceptions.Blobs;

public class UserNotRelatedToBlobException : AppException
{
    public UserNotRelatedToBlobException() : base(ExceptionConsts.InvalidFile, 400)
    {
    }
}