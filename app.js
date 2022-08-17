let numero = Math.floor(Math.random() * 101);
let numHum = document.querySelector("#numHum");

let algunNumero;
numHum.addEventListener("keypress", (Event) => {
  if (Event.key === "Enter") {
    algunNumero = numHum.value;
    if (algunNumero < numero) {
      alert("el numero que busca es mas grande");
    } else if (algunNumero > numero) {
      alert("el numero que buscas es mas chico");
    } else {
      alert("ganaste");
    }
  }
});
