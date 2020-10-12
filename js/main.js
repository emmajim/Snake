let longitud = 1;
let direccionX = 0;
let direccionY = 0;
let culebrita = [{ x: 0, y: 0 }];


window.onload = function () {
  comida = ubicacionComida();
  document.addEventListener("keydown", cambiarDireccion);
};

function cambiarDireccion(e) {
  if (e.keyCode == 37) {
    direccionX = -1;
    direccionY = 0;
  }
  if (e.keyCode == 38) {
    direccionX = 0;
    direccionY = -1;
  }
  if (e.keyCode == 39) {
    direccionX = 1;
    direccionY = 0;
  }
  if (e.keyCode == 40) {
    direccionX = 0;
    direccionY = 1;
  }
}

function ubicacionComida() {
   f = {
    x: Math.floor(Math.random() * 15),
    y: Math.floor(Math.random() * 15),
  };

}ubicacionComida()

function Jugar() {
  let canvas = document.getElementById("Culebrita");
  let ctx = canvas.getContext("2d");
  let x = culebrita[0].x + direccionX;
  let y = culebrita[0].y + direccionY;
  if (x > 14) culebrita[0].x = 0;

  if (x < 0) culebrita[0].x = 14;

  if (y > 14) culebrita[0].y = 0;

  if (y < 0) culebrita[0].y = 14;

  culebrita.unshift({ x: x, y: y });
  for (let i = 1; i < longitud; i++) {
    if (x === culebrita[i].x && y === culebrita[i].y) {
      longitud = 1;
    }
  }

  if (culebrita[0].x == f.x && culebrita[0].y == f.y) {
    longitud++;
    ubicacionComida();
  }
  ctx.clearRect(0, 0, 500, 500);
  ctx.strokeRect(0, 0, 15 * 30, 15 * 30);
   for (let i = 0; i < longitud; i++) {
       ctx.fillRect(culebrita[i].x,culebrita[i].y,25,25)
    }
    ctx.fillRect(f.x,f.y,25,25)


}
setInterval("Jugar()", 10);
