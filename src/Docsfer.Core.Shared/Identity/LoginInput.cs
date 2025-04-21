using System.ComponentModel.DataAnnotations;

namespace Docsfer.Core.Shared.Identity;

public class LoginInput
{
    [Required]
    [MaxLength(256)]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public bool RememberMe { get; set; } = false;
}
