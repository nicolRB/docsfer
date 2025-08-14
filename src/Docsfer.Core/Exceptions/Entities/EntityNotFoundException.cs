namespace Docsfer.Core.Exceptions.Entities;

public class EntityNotFoundException : AppException
{
    public EntityNotFoundException(string entityName)
        : base(ExceptionConsts.EntityNotFound.Replace("{0}", entityName), 400)
    {
    }
}
