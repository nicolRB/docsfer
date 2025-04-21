namespace Docsfer.Core.Exceptions.Identity;

public class EmailAlreadyRegisteredException : AppException
{
    public EmailAlreadyRegisteredException() : base(ExceptionConsts.EmailAlreadyRegistered, 400)
    {
    }
}
