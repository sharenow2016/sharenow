using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ShareNow.ShareNowEntities
{
    public class CommonEntities : DbContext
    {

        public CommonEntities()
            : base("name=CommonEntities")
        { }
            
       public virtual DbSet<Users> Users { get; set; }

       //public virtual DbSet<Payment> Payment { get; set; }
    }
}