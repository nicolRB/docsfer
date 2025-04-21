param (
    [Parameter()]
    [String]
    $MigrationName
)

dotnet ef migrations add $MigrationName -c DocsferDbContext --project ./Docsfer.EntityFrameworkCore.csproj --startup-project ../Docsfer.Api/Docsfer.Api.csproj