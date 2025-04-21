using Docsfer.Core.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Docsfer.EntityFrameworkCore;

public class DocsferDbContext(DbContextOptions<DocsferDbContext> options) :
    IdentityDbContext<User, Role, Guid>(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>(b =>
        {
            b.ToTable("User");
        });

        builder.Entity<IdentityUserClaim<Guid>>(b =>
        {
            b.ToTable("UserClaim");
        });

        builder.Entity<IdentityUserLogin<Guid>>(b =>
        {
            b.HasKey(e => new { e.LoginProvider, e.ProviderKey });
            b.ToTable("UserLogin");
        });

        builder.Entity<IdentityUserToken<Guid>>(b =>
        {
            b.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });
            b.ToTable("UserToken");
        });

        builder.Entity<Role>(b =>
        {
            b.ToTable("Role");
        });

        builder.Entity<IdentityRoleClaim<Guid>>(b =>
        {
            b.ToTable("RoleClaim");
        });

        builder.Entity<IdentityUserRole<Guid>>(b =>
        {
            b.HasKey(e => new { e.RoleId, e.UserId });
            b.ToTable("UserRole");
        });
    }
}
