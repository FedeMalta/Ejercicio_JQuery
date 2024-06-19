$(function() {

    $("#botonAnterior").click(function() {
        $("img").show();
        $("h1").text("¡Mirá la siguiente imagen!");
    });

    $("#botonSiguiente").click(function() {
        $("img").hide();
        $("h1").text("¡No tenemos ninguna imagen!");
    });
});