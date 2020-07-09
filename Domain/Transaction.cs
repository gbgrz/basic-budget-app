using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    [Table("transaction")]
    public class Transaction
    {
        [Column("id")]
        public Guid Id { get; set; }
        [Column("date")]
        [Required]
        public DateTime? Date { get; set; }
        [Column("type")]
        [Required]
        public string Type { get; set; }
        [Column("description")]
        [Required]
        public string Description { get; set; }
        [Column("value")]
        [Required]
        public decimal Value { get; set; }
    }
}