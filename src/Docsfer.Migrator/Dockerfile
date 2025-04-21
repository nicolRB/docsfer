FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /source

COPY . .

RUN dotnet restore Docsfer.sln

WORKDIR /source/src/Docsfer.Migrator

RUN mkdir /app

RUN dotnet publish -o /app --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS run

WORKDIR /app

COPY --from=build /app .

EXPOSE 8080

CMD [ "./Docsfer.Migrator" ]
