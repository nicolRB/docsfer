using Docsfer.Core.Groups;
using Docsfer.Core.Identity;

namespace Docsfer.Core.Relationships;

public class GroupUser
{
    public Guid UserId { get; set; }

    public Guid GroupId { get; set; }

    public User? User { get; set; } = null;

    public Group? Group { get; set; } = null;
}
