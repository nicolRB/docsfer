using Docsfer.Api.Repositories;
using Docsfer.Core.Chat;
using Docsfer.Core.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Docsfer.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/v1/chat")]
public class ChatController : ControllerBase
{
    private readonly IChatRepository _chatRepository;
    private readonly IBlobEntryRepository _blobEntryRepository;
    private readonly UserManager<User> _userManager;

    public ChatController(
        IChatRepository chatRepository, 
        IBlobEntryRepository blobEntryRepository, 
        UserManager<User> userManager)
    {
        _chatRepository = chatRepository;
        _blobEntryRepository = blobEntryRepository;
        _userManager = userManager;
    }

    [HttpPost("{blobId}/message")]
    public async Task<IActionResult> PostMessage(long blobId, PostMessageInput input)
    {
        var user = await _userManager.GetUserAsync(User);

        var blob = await _blobEntryRepository.FindByIdAsync(blobId);
        if (blob == null)
        {
            return NotFound("Arquivo não encontrado");
        }

        var message = new ChatMessage
        {
            BlobEntryId = blob.Id.Value,
            UserId = user.Id,
            Content = input.Content,
            CreatedAt = DateTime.UtcNow
        };

        await _chatRepository.InsertAsync(message);

        return Ok(message);
    }

    [HttpGet("{blobId}/messages")]
    public async Task<IActionResult> GetMessages(long blobId)
    {
        var messages = await _chatRepository.GetByBlobAsync(blobId);
        return Ok(messages);
    }
}
