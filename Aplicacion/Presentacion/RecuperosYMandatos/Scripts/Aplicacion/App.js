var custom = {
    redireccionUrl: function (url) {
        custom.setearLoader();
        $(location).attr('href', url);
    },
    modificarDatosContacto: function (url, contenedorModal, titulo, mensaje) {
        var model = build.renderizarModelFrom("#contenedorPrincipalModificarDatosContacto");

        if (custom.varlidarCampos(model)) {
            custom.redireccionUrl(url);
        } else {
            modals.modalsGernerico(contenedorModal, titulo, mensaje);
        }
    },
    varlidarCampos: function (model) {
        var validacion = true;
        if (!model.CodigoPostal) { validacion = false; }
        if (!model.Telefeno) { validacion = false; }
        if (!model.Email) { validacion = false; }
        return validacion;
    },
    setearLoader: function () {
        //$("body").append('<div class="loading-icon" ></div>');
        $("body").append('<div class="fakeloader"></div>');
        $(".fakeloader").fakeLoader({
            zIndex: 999,
            spinner: "spinner6",
            bgColor: "#811D1D",
            timeToHide: 1000
        });
    }
};

var build = {
    renderizarModelFrom: function (container) {
        var model = {};
        $(container).find("input, select, input:checked")
            .not(":input[type='button'], :input[type='submit'], :input[type='reset'], input:checkbox:not(:checked), input:radio:not(:checked)")
            .each(function () {
                if ($(this).length > 1) {
                    $(this).each(function () {
                        var attrName = $(this).attr('name');
                        model[attrName] = $(this).val();
                    })
                } else {
                    var attrName = $(this).attr('name');
                    model[attrName] = $(this).val();
                }
            });
        return model;
    },
    ajax: function (url, contenedor) {
        //$.ajax({
        //    type: 'GET',
        //    url: url,
        //    contentType: 'application/html; charset=utf-8',
        //    dataType: 'html',
        //    success: function (response) {
        //        $(contenedor).html(response);
        //    },
        //    failure: function (response) {
        //        alert(response.responseText);
        //    },
        //    error: function (response) {
        //        alert(response.responseText);
        //    }
        //});
    },
    renderizarVista: function (data) {
        $("#body-container").html(data);
    }
}



var http = {

    post: function (url, model, callbackSuccess, callbackFailure) {
        custom.setearLoader();

        $.post(url, model, function (data) {
            if (data.Error) {
                alertControl.error(data.Message);
                return;
            }

            if (data.Warn) {
                alertControl.warn(data.Message);
                return;
            }

            callbackSuccess(data);
        }).fail(function () {
            if (callbackFailure) {
                callbackFailure();
            } else {
                alertControl.errorGenerico();
                return;
            }
        });

    },

    get: function (url, model, callbackSuccess, callbackFailure) {
        custom.setearLoader();

        $.get(url, model, function (data) {
            if (data.Error) {
                alertControl.error(data.Message);
                return;
            }

            if (data.Warn) {
                alertControl.warn(data.Message);
                return;
            }

            callbackSuccess(data);
        }).fail(function () {
            if (callbackFailure) {
                callbackFailure();
            } else {
                alertControl.errorGenerico();
                return;
            }
        });
    }
}

var alertControl = {
    error: function (message) {
        if (Array.isArray(message)) {
            message = message.join("<br />");
        }

        $(".alert").remove();
        var alert = "<div class='alert alert-danger alert-dismissible'> <a  class='close' data-dismiss='alert' aria-label='close'>&times;</a> <strong>Error!</strong> __MESSAGE </div>";
        alert = alert.replace("__MESSAGE", message);
        console.log(alert);
        $("#body-container").prepend(alert.toString());
    },
    errorGenerico: function () {
        alertControl.error("Ha ocurrido un error.Por favor intente luego.");
    },

    warn: function (message) {

        if (Array.isArray(message)) {
            message = message.join("<br />");
        }

        $(".alert").remove();
        var alert = "<div class='alert alert-warning alert-dismissible'> <a  class='close' data-dismiss='alert' aria-label='close'>&times;</a> <strong>Advertencia!</strong> __MESSAGE </div>";
        alert = alert.replace("__MESSAGE", message);
        console.log(alert);
        $("#body-container").prepend(alert.toString());
    },

    success: function (data) {
        $(".alert").remove();
        var alert = "<div class='alert alert-success alert-dismissible'> <a  class='close' data-dismiss='alert' aria-label='close'>&times;</a> <strong>Éxito!</strong> __MESSAGE</div>";
        alert = alert.replace("__MESSAGE", message);

        $("#body-container").prepend(alert);
    }
}


$(document).ready(function () {
    $.protip();
});