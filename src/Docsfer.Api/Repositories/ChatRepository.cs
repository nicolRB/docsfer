using Docsfer.Core.Chat;
using Docsfer.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Docsfer.Api.Repositories;

public class ChatRepository : IChatRepository
{
    private readonly DocsferDbContext _context;

    public ChatRepository(DocsferDbContext context)
    {
        _context = context;
    }

    public async Task InsertAsync(ChatMessage message)
    {
        await _context.ChatMessages.AddAsync(message);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<ChatMessage>> GetByBlobAsync(long blobEntryId)
    {
        return await _context.ChatMessages
            .Where(m => m.BlobEntryId == blobEntryId)
            .OrderBy(m => m.CreatedAt)
            .ToListAsync();
    }
}