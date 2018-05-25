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
            if (unDeudor == null || unDeudor.ID == 0)
            {
                return View("~/Views/Home/SinIdentificacion.cshtml");
            }
            return PartialView("~/Views/Home/DatosContacto.cshtml", unDeudor);
        }

        public ActionResult SaveOrUpdate(Deudor unDeudor)
        {
            new Deudor().SaveOrUpdate(unDeudor);
            return View("~/Views/Home/ConfirmacionValidacion.cshtml");
        }
    }
}