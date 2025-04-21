namespace Docsfer.Core.Exceptions.Identity;

public class PasswordInvalidException : AppException
{
    public PasswordInvalidException() : base(ExceptionConsts.PasswordInvalid, 400)
    {
    }
}
