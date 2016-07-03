using ShareNow.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ShareNow.ViewModel
{
    public class ShareAmount
    {
        public ShareAmount()
        {
            //AvailableMembers = new List<user>();
            // = GemsModel.GetAllHospitals();

        }
        [Required]
        [Display(Name ="Amount")]
        public int Amount { get; set; }

        [Required]
        [Display(Name = "Category")]
        public string Category { get; set; }

        // public IEnumerable<user> AvailableMembers { get; set; }
        public AvailableMembers SelectedMembers { get; set; }
        public string Message { get; set; }
    }
}