using Docsfer.Core.Groups;
using Microsoft.AspNetCore.Identity;

namespace Docsfer.Core.Identity;

public class User : IdentityUser<Guid>
{
    public List<Group> Groups { get; } = [];
}
