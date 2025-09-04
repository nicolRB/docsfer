using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Docsfer.Core.Chat
{
    public class PostMessageInput
    {
        [Required]
        [StringLength(1000)]
        public string Content { get; set; } = string.Empty;
    }
}
