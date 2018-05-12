using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RecuperosYMandatos.Models;

namespace RecuperosYMandatos.Controllers
{
    public class DeudorController : Controller
    {
        // GET: Deudor
        public ActionResult DeudorGetById(long ID)
        {
            Deudor unDeudor = new Deudor().GetDeudorByID(ID);
            if (unDeudor == null)
            {
                return HttpNotFound();
            }
            else if (unDeudor.ID == 0)
            {
                return View("~/Views/Home/Registracion.cshtml");
            }
            return View("~/Views/Home/DatosContacto.cshtml", unDeudor.GetDeudorByID(ID));
        }
    }
}