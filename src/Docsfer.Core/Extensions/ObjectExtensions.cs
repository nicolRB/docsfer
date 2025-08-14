using Docsfer.Core.Exceptions.Entities;

namespace Docsfer.Core.Extensions;

public static class ObjectExtensions
{
    public static T EnsureExists<T>(this T? obj) where T : class
    {
        if (obj is null)
        {
            throw new EntityNotFoundException(typeof(T).Name);
        }

        return obj;
    }
}
