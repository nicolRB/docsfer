using System.ComponentModel.DataAnnotations;

namespace Docsfer.Core.Shared.Relationships;

public class PostRelationshipInput
{
    [Required]
    public Guid PartyOne { get; set; } = Guid.Empty;

    [Required]
    public Guid PartyTwo { get; set; } = Guid.Empty;
}

