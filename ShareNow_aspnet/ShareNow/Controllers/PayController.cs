using ShareNow.ShareNowEntities;
using ShareNow.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShareNow.Controllers
{
    public class PayController : Controller
    {
        // GET: Pay
        public ActionResult Index()
        {
            CommonEntities db = new CommonEntities();
            var ViewModel = new ViewModel.Pay();
           // var val = (from n in db.Payment select n).ToList();
            ViewBag.UserName = new SelectList(db.Users, "id", "name");
            return View(ViewModel);
        }


        public ActionResult IndexPost()
        {
            CommonEntities db = new CommonEntities();
            var ViewModel = new ViewModel.Pay();
            var NewGroup = new ShareNowEntities.Payment();
            NewGroup.Date = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            ViewModel.Message = "Data Insert Successfully..........." ;
            //var AvailableUsers = (from n in db.Users where !n.name.ToUpper().Contains("RE") select n).ToList();

            ViewBag.UserName = new SelectList(db.Users, "id", "name");
            return View("Index", ViewModel);
        }

    }
};