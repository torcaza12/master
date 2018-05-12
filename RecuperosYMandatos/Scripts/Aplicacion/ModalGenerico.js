var modals = {
    gernericoListErrores: function (selector, titulo, listErrores) {
        $("#tituloModalListErrores").text(titulo);
        $("#listaErrores").empty();
        $.map(listErrores, function (key, value) {
            $("#listaErrores").append('<p>' + key + '</p>');
        })
        $(selector).modal('show');
    },
    modalsGernerico: function (selector, titulo, mensaje) {
        $("#titulo").text(titulo);
        $("#mensajeTexto").text(mensaje);
        $("#confirmacinAccion").off("click").on("click", function () {
            console.log("Click Aceptar");
        });
        $(selector).modal('show');
    }
}