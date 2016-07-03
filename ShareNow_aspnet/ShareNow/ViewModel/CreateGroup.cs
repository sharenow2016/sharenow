using ShareNow.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShareNow.ViewModel
{
    public class CreateGroup
    {


        public string GroupName { get; set; }
        public AvailableMembers GroupMembers { get; set; }
        public string Message { get; set; }
    }

}