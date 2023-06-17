const palabrasCali = document.getElementById ("pcali")
const palabrasBona = document.getElementById ("pbona")
const palabrasNero = document.getElementById ("pnero")
const botonCali = document.getElementById ("bcali")
const botonBona = document.getElementById ("bbona")
const botonNero = document.getElementById ("bnero")

let nombre = "0"

nombre = prompt("¿Cual es tu nombre?")	
alert("Bienvenido " + nombre)

palabrasCali.style.display = "none"
palabrasBona.style.display = "none"
palabrasNero.style.display = "none"

botonCali.addEventListener ("click", desplegarCali)
botonBona.addEventListener ("click", desplegarBona)
botonNero.addEventListener ("click", desplegarNero)

function desplegarCali() {
    palabrasCali.style.display = "flex"
    botonCali.style.display = "none"
}

function desplegarBona() {
    palabrasBona.style.display = "flex"
    botonBona.style.display = "none"
}

function desplegarNero() {
    palabrasNero.style.display = "flex"
    botonNero.style.display = "none"
}