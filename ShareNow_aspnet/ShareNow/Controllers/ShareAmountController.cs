using ShareNow.ShareNowEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShareNow.Controllers
{
    public class ShareAmountController : Controller
    {
        // GET: ShareAmount
        public ActionResult Index()
        {
            CommonEntities db = new CommonEntities();
            //var ViewModel = new Sha();
            //var AvailableUsers = (from n in db.Users where !n.name.ToUpper().Contains("RE") select n).ToList();
            ViewBag.UserName = new SelectList(db.Users, "id", "name");
            return View();
        }
        public ActionResult IndexPost()
        {
            CommonEntities db = new CommonEntities();
            var ViewModel = new ViewModel.ShareAmount();
            ViewModel.Message = "Data Insert Successfully...........";
            //var AvailableUsers = (from n in db.Users where !n.name.ToUpper().Contains("RE") select n).ToList();
            ViewBag.UserName = new SelectList(db.Users, "id", "name");
            return View("Index", ViewModel);
        }
    }
}