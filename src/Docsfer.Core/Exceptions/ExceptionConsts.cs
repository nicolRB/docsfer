namespace Docsfer.Core.Exceptions;

public static class ExceptionConsts
{
    public const string EntityNotFound = "{0} not found";

    public const string EmailInvalid = "email or password invalid";
    public const string PasswordInvalid = "email or password invalid";
    public const string AccountLockedOut = "account locked, try again later";
    public const string EmailAlreadyRegistered = "email already exists";
    public const string CouldNotRegisterUser = "could not register user";

    public const string DownloadFilenameInvalid = "filename invalid";
    public const string InvalidFile = "invalid file";
    public const string UserNotRelatedToBlob = "invalid file";
}
