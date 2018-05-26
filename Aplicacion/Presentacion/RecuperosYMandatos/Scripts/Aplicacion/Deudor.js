var deudor = {
     confirmarDatoIdentificacion: function (contenedor) {
        var errores = [];
        var model = build.renderizarModelFrom(contenedor);
        errores = deudor.validarCampoIdentificacion(model, errores);
        custom.setearLoader();
        if (errores.length !== 0) {
            var el = $('.my-el');
            el.protipShow({
                title: 'Por favor, ingrese una identificación correcta',
                scheme: 'blue'
            });
        } 
     },
     validarCampoIdentificacion: function (model, lisErroes) {
        if (!model.ID) { lisErroes.push("Por favor, ingrese su identificación."); }
        return lisErroes;
     },
     confirmarDatosContacto: function (contenedor) {
         var model = build.renderizarModelFrom(contenedor);
         deudor.validarDatosContacto(model);
         //custom.setearLoader();
     },
     validarDatosContacto: function (model) {
         var el;
         if (!model.Apellido)
         {
             el = $('.my-el');
             el.protipShow({
                 title: 'Por favor, ingrese su apellido',
                 scheme: 'blue'
             });
             return;
         }
         if (!model.Nombre)
         {
             el = $('.my-nombre');
             el.protipShow({
                 title: 'Por favor, ingrese su nombre',
                 scheme: 'blue'
             });
             return;
         }
         if (!model.Telefono_celular) {
             el = $('.my-telefono_celular');
             el.protipShow({
                 title: 'Por favor, ingrese su teléfono celular',
                 scheme: 'blue'
             });
             return;
         }
         if (!model.Correo_electronico) {
             el = $('.my-correo_electronico');
             el.protipShow({
                 title: 'Por favor, ingrese su correo electrónico',
                 scheme: 'blue'
             });
             return;
         }
     }
}