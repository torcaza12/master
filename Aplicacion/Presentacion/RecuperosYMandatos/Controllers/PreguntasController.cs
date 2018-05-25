using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RecuperosYMandatos.Controllers
{
    public class PreguntasController : Controller
    {
        // GET: Preguntas
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Pregunta2()
        {
            return View();
        }

        public ActionResult Confirmacion()
        {
            return View();
        }
        public ActionResult Validacion()
        {
            return View();
        }

        public ActionResult IndexPartial()
        {
            return View();
        }

    }
}