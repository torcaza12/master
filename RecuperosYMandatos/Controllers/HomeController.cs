using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;
using System.Globalization;

namespace RecuperosYMandatos.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SetLanguage(string idioma)
        {
            Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(idioma);
            return RedirectToAction("Index", "Home", new { culture = idioma });
        }

        public ActionResult Registracion()
        {
            return View();
        }

        public ActionResult DatosContacto()
        {
            return View();
        }

        public ActionResult ConfirmacionValidacion()
        {
            return View();
        }
    }
}