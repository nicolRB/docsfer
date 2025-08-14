namespace Docsfer.Core.Exceptions.Identity;

public class EmailInvalidException : AppException
{
    public EmailInvalidException() : base(ExceptionConsts.EmailInvalid, 400)
    {
    }
}
