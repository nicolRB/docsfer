using Docsfer.Core.Chat;

namespace Docsfer.Api.Repositories;

public class ChatRepository : IChatRepository
{
    private readonly List<ChatMessage> _messages = new();

    public Task InsertAsync(ChatMessage message)
    {
        _messages.Add(message);
        return Task.CompletedTask;
    }
    public Task<IEnumerable<ChatMessage>> GetByBlobAsync(long blobEntryId)
    {
        var result = _messages.Where(m => m.BlobEntryId == blobEntryId);
        return Task.FromResult(result.AsEnumerable());
    }
}
