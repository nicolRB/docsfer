using System.ComponentModel.DataAnnotations;

namespace Docsfer.Core.Shared.Identity;

public class RegisterInput
{
    [Required]
    [MaxLength(256)]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    public string Password { get; set; } = string.Empty;
}
