using System.Web;
using System.Web.Optimization;

namespace RecuperosYMandatos
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Content/assets/js/jquery-1.11.1.min.js",
                        "~/Content/assets/js/jquery.backstretch.min.js",
                        "~/Content/assets/js/scripts.js",
                         "~/Scripts/Aplicacion/ModalGenerico.js",
                         "~/Scripts/Aplicacion/Deudor.js",
                         "~/Scripts/Aplicacion/App.js",
                         "~/Scripts/jquery.unobtrusive-ajax.min.js",
                         "~/Scripts/DarkToolTip/jquery.darktooltip.js",
                         "~/Scripts/infoBox.js",
                         "~/Scripts/protip.min.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            //plugin
            bundles.Add(new ScriptBundle("~/bundles/plugin").Include(
                        "~/Scripts/Plugin/Loading/fakeLoader.js"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/respond.js",
                      "~/Content/assets/bootstrap/js/bootstrap.min.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css",
                      "~/Content/assets/bootstrap/css/bootstrap.css",
                      "~/Content/assets/font-awesome/css/font-awesome.min.css",
                      "~/Content/assets/css/form-elements.css",
                      "~/Content/assets/css/style.css",
                      "~/Scripts/Plugin/Loading/fakeLoader.css",
                      "~/Scripts/DarkToolTip/darktooltip.css",
                      "~/Scripts/protip.min.css"
                      ));

 


        }
    }
}
