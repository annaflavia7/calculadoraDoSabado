function clq1() {
    alert("Você clicou no Botão 1");
}

let bt2 = document.getElementById("bt2");
bt2.addEventListener("click", clq2);

function clq2() {
    alert("Você clicou no Botão 2");
}

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value))
});

function somar(a, b) {
    resultado.textContent = a + b;
}
let idioma = document.getElementById("idioma");
idioma.addEventListener("change", function () {
    if (this.value == "br") {
        btSomar.value = "Somar";
    } else if (this.value == "es") {
        btSomar.value = "Sumar"
    }
    else if (this.value == "en") {

        btSomar.value = "Add";
    }
    else if (this.value == "fr") {
        btSomar.value = "Ajjouter";

    }
});


