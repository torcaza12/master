var deudor = {
     confirmarDatoIdentificacion: function (url, contenedor, contenedorModal) {
        var errores = [];
        var model = build.renderizarModelFrom(contenedor);
        errores = deudor.validarCampoIdentificacion(model, errores);
        if (errores.length != 0) {
            custom.setearLoader();
            modals.gernericoListErrores(contenedorModal, "Advertencia", errores);
        } else {
            url = url + "?ID=" + model.ID;
            $(location).attr('href', url);
        }
     },
     validarCampoIdentificacion: function (model, lisErroes) {
        if (!model.ID) { lisErroes.push("Por favor, ingrese su identificación."); }
        return lisErroes;
     }
}