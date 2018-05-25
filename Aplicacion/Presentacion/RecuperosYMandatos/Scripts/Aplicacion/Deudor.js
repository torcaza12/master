var deudor = {
     confirmarDatoIdentificacion: function (contenedor) {
        var errores = [];
        var model = build.renderizarModelFrom(contenedor);
        errores = deudor.validarCampoIdentificacion(model, errores);
        custom.setearLoader();
        if (errores.length != 0) {
            var el = $('.my-el');
            el.protipShow({
                title: '"Por favor, ingrese una identificación correcta"',
                scheme: 'blue'
            });
        } 
     },
     validarCampoIdentificacion: function (model, lisErroes) {
        if (!model.ID) { lisErroes.push("Por favor, ingrese su identificación."); }
        return lisErroes;
     },
     confirmarDatosContacto: function (contenedor) {
         var errores = [];
         var model = build.renderizarModelFrom(contenedor);
         errores = deudor.validarDatosContacto(model, errores);
         custom.setearLoader();
         if (errores.length != 0) {
             //var el = $('.my-el');
             //// Shows tooltip with title: "My new title"
             //el.protipShow({
             //    title: errores[0],
             //    scheme: 'blue'
             //});
         }
     },
     validarDatosContacto: function (model, lisErroes) {
         if (!model.Apellido)
         {
             lisErroes.push("Por favor, ingrese su apellido.");
             return lisErroes;
         }
         if (!model.Nombre)
         {
             lisErroes.push("Por favor, ingrese su nombre.");
             var el = $('.my-el');
             // Shows tooltip with title: "My new title"
             el.protipShow({
                 title: lisErroes,
                 scheme: 'blue'
             });
             return lisErroes;
         }
         if (!model.Telefono_celular) {
             lisErroes.push("Por favor, ingrese su teléfono celular.");
             return lisErroes;
         }
         if (!model.Correo_electronico) {
             lisErroes.push("Por favor, ingrese su correo electrónico.");
             return lisErroes;
         }
     }

}