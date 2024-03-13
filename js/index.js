var l1 = document.getElementById("iduno");
var l2 = document.getElementById("iddos");
var l3 = document.getElementById("idtres");
var contenido = document.getElementById("contenidoid");

var menuitems = document.querySelectorAll(".bars");

menuitems.forEach(function (menu) {
    menu.addEventListener("click", function () {
        var activado = l1.classList.contains("active");

        if (activado) {
            quitarActivacion();
        } else {
            agregarActivacion();
        }
    });
});

var elementos = [document.getElementById("ele1"),
                document.getElementById("ele2"),
                document.getElementById("ele3"),
                document.getElementById("ele4"),
                document.getElementById("ele5")];

elementos.forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        quitarActivacion();
    });
});

function agregarActivacion() {
    document.body.style.overflow = 'hidden';
    l1.classList.add("active");
    l2.classList.add("active");
    l3.classList.add("active");
    contenido.classList.add("activado");
}

function quitarActivacion() {
    document.body.style.overflow = 'auto';
    l1.classList.remove("active");
    l2.classList.remove("active");
    l3.classList.remove("active");
    contenido.classList.remove("activado");
}
