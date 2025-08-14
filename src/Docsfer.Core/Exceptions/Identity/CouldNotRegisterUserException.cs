namespace Docsfer.Core.Exceptions.Identity;

public class CouldNotRegisterUserException : AppException
{
    public CouldNotRegisterUserException() : base(ExceptionConsts.CouldNotRegisterUser, 500)
    {
    }
}
