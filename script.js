let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function() {
    somar(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

let selectedLanguage = document.querySelector("#idioma");
selectedLanguage.addEventListener("change", function() {
    if (this.value == "br") {
        btSoma.value = "Soma";
    }
    else if (this.value == "en") {
        btSoma.value = "Sum";
    }
    else if (this.value == "es") {
        btSoma.value = "Suma";
    }
});