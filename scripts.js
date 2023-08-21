let h1 = document.querySelector("h1")

let tempo = {
  ensolarado: "calor",
  chuvoso: "frio"
}

if (tempo.ensolarado === "calor") {

  let h3 = document.createElement("h3")

  h3.textContent = tempo.ensolarado + 'ão'

  let body = document.querySelector("body")

  body.appendChild(h3)
}

h1.textContent = "Starting my first web dev course"