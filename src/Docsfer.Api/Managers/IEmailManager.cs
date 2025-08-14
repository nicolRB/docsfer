namespace Docsfer.Api.Managers;

public interface IEmailManager
{
    public Task SendAsync(string subject, string htmlMessage, params string[] toEmails);
}