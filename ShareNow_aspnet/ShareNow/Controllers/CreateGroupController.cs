using ShareNow.ShareNowEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShareNow.Controllers
{
    public class CreateGroupController : Controller
    {
        // GET: CreateGroup
        public ActionResult Index()
        {
            CommonEntities db = new CommonEntities();
            
           ViewBag.UserName = new SelectList(db.Users, "id", "name");

            return View();
        }

        public ActionResult IndexPost()
        {
            CommonEntities db = new CommonEntities();
            var NewGroup = new Users();
            var ViewModel = new ViewModel.CreateGroup();
            NewGroup.name = "Raja";
            //db.Users.Add(NewGroup);
            db.SaveChanges();
            ViewModel.Message = "Data Insert Successfully...........";
            //var AvailableUsers = (from n in db.Users where !n.name.ToUpper().Contains("RE") select n).ToList();
           ViewBag.UserName = new SelectList(db.Users, "id", "name", "age");
            return View("Index", ViewModel);
        }
    }
}