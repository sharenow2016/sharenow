using ShareNow.Entities;
using ShareNow.Models;
using ShareNow.ShareNowEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ShareNow.ViewModel
{
    public class Pay
    {
        public Pay()
        {
            //AvailableUsers = new List<Users>();
            //AvailableUsers = ShareNowModel.UsersList();
        }
        [Required]
        [Display(Name = "Amount")]
        public int PayAmount { get; set; }

        public IEnumerable<Users>  AvailableUsers { get; set; }

        public string Message { get; set; }

        //public string[] SubmittedUsers { get; set; }

    }
}