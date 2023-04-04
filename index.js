const disminuir = document.getElementById("btn-disminuir");
const restear = document.getElementById("btn-resetear");
const aumentar = document.getElementById("btn-aumentar");
const contador = document.querySelector(".counter");
let contadorSecundario = 0;

disminuir.addEventListener("click", function () {
  contadorSecundario += -1;
  console.log(contadorSecundario);
  contador.textContent = contadorSecundario;
  contador.classList.remove("negativo");
  contador.classList.remove("neutro");
  contador.classList.remove("positivo");
  if (contadorSecundario < 0) {
    contador.classList.add("negativo");
  }
  if (contadorSecundario > 0) {
    contador.classList.add("positivo");
  }
  if (contadorSecundario == 0) {
    contador.classList.add("neutro");
  }
});

restear.addEventListener("click", function () {
  contadorSecundario = 0;
  console.log(contadorSecundario);
  contador.textContent = contadorSecundario;
  contador.classList.remove("negativo");
  contador.classList.remove("neutro");
  contador.classList.remove("positivo");
  if (contadorSecundario < 0) {
    contador.classList.add("negativo");
  }
  if (contadorSecundario > 0) {
    contador.classList.add("positivo");
  }
  if (contadorSecundario == 0) {
    contador.classList.add("neutro");
  }
});

aumentar.addEventListener("click", function () {
  contadorSecundario += 1;
  console.log(contadorSecundario);
  contador.textContent = contadorSecundario;
  contador.classList.remove("negativo");
  contador.classList.remove("neutro");
  contador.classList.remove("positivo");
  if (contadorSecundario < 0) {
    contador.classList.add("negativo");
  }
  if (contadorSecundario > 0) {
    contador.classList.add("positivo");
  }
  if (contadorSecundario == 0) {
    contador.classList.add("neutro");
  }
});
