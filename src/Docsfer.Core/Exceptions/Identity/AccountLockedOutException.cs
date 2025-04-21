namespace Docsfer.Core.Exceptions.Identity;

public class AccountLockedOutException : AppException
{
    public AccountLockedOutException() : base(ExceptionConsts.EmailInvalid, 400)
    {
    }
}
