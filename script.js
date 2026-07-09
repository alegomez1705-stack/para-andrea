const corazon = document.querySelector(".corazon");

let total = 120;

for(let i = 0; i < total; i++){

    let texto = document.createElement("span");
    texto.className = "particula";
    texto.innerHTML = "I LOVE YOU";

    let t = (Math.PI * 2 / total) * i;


    // Fórmula del borde del corazón
    let x = 16 * Math.pow(Math.sin(t),3);

    let y = 13 * Math.cos(t)
          - 5 * Math.cos(2*t)
          - 2 * Math.cos(3*t)
          - Math.cos(4*t);


    texto.style.left = (200 + x * 10) + "px";
    texto.style.top = (200 - y * 10) + "px";


    texto.style.animationDelay =
        (Math.random()*1)+"s";


    corazon.appendChild(texto);
}
const contenedor = document.getElementById("corazones");

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (15 + Math.random() * 25) + "px";
    corazon.style.animationDuration = (3 + Math.random() * 4) + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);
}

setInterval(crearCorazon, 300);