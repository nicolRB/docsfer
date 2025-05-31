
using System.Net.Mail;
using Ardalis.GuardClauses;

namespace Docsfer.Api.Managers;

public class EmailManager : IEmailManager
{
    private readonly IConfiguration _configuration;
    private readonly SmtpClient _smtpClient;
    private readonly bool _enabled;

    public EmailManager(IConfiguration configuration, SmtpClient smtpClient)
    {
        _configuration = configuration;
        _smtpClient = smtpClient;
        _enabled = _configuration["Smtp:Enabled"] == bool.TrueString;
    }

    public async Task SendAsync(string subject, string htmlMessage, params string[] toEmails)
    {
        var fromEmail = _configuration["Smtp:EmailAddress"];
        Guard.Against.NullOrWhiteSpace(fromEmail);

        var mailMessage = new MailMessage
        {
            From = new MailAddress(fromEmail),
            Subject = subject,
            Body = htmlMessage,
            IsBodyHtml = true,
        };

        foreach (var email in toEmails)
        {
            mailMessage.To.Add(email);
        }

        await _smtpClient.SendMailAsync(mailMessage);
    }
}