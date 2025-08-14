using Docsfer.Core.Groups;

namespace Docsfer.Api.Repositories;

public interface IGroupRepository
{
    public Task<Group?> FindByIdAsync(Guid id);
}