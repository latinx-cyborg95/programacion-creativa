import './scss/estilos.scss';

console.log('Webpack');

const canvas = document.getElementById('lienzoydata');
const ctx = canvas.getContext('2d');
const raton = { x: 0, y: 0, anteriorX: 0, anteriorY: 0 };
let cambio = 0;

function actualizar() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let canvas = document.getElementById('lienzoydata');
  let context = canvas.getContext('2d');

  context.clearReact(0, 0, 500, 500);
  showAxes(context);
  context.save();

  plotSine(context, step, 50);
  context, restore();

  step += 4;
  window.webkitRequestAnimationFrame(draw);
}

function generadorDeDatos(cantidadRegistros, cantidadDias, min, max) {
  let registrosTotales = [];
  for (var o = 0; o < Number(cantidadDias); o++) {
    let registrosDiarios = [];
    for (var i = 0; i < Number(cantidadRegistros); i++) {
      registrosDiarios.push(Math.floor(Math.random() * Number(max)) + Number(min));
    }
    registrosTotales.push(registrosDiarios);
  }
  return registrosTotales;
}

let lunes = generadorDeDatos(5, 1, 50, 250);
let martes = generadorDeDatos(5, 2, 50, 250);
let miercoles = generadorDeDatos(5, 3, 50, 250);
let jueves = generadorDeDatos(5, 4, 50, 250);
let viernes = generadorDeDatos(5, 5, 50, 250);
let sabado = generadorDeDatos(5, 6, 50, 250);
let domingo = generadorDeDatos(5, 7, 50, 250);

let enero = generadorDeDatos(5, 31, 50, 250);
let febrero = generadorDeDatos(5, 28, 50, 250);
let marzo = generadorDeDatos(5, 31, 50, 250);
let abril = generadorDeDatos(5, 30, 50, 250);
let mayo = generadorDeDatos(5, 31, 50, 250);
let junio = generadorDeDatos(5, 30, 50, 250);
let julio = generadorDeDatos(5, 31, 50, 250);
let agosto = generadorDeDatos(5, 31, 50, 250);
let septiembre = generadorDeDatos(5, 30, 50, 250);
let octubre = generadorDeDatos(5, 31, 50, 250);
let noviembre = generadorDeDatos(5, 30, 50, 250);
let diciembre = generadorDeDatos(5, 31, 50, 250);

let año = generadorDeDatos(5, 365, 50, 250);
let bisiesto = generadorDeDatos(5, 366, 50, 250);

canvas.onmousemove = (evento) => {
  raton.x = evento.clientX;
  raton.y = evento.clientY;
};

function animacion() {}

function plotSine(ctx, xOffset, yOffset) {
  let width = ctx.canvas.width;
  let height = ctx.canvas.height;
  let scale = 20;

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgb(66,44,255)';

  let x = 4;
  let y = 0;
  let amplitude = 40;
  let frequency = 20;
  ctx.moveTo(x, 50);
  while (x < width) {
    y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
    ctx.lineTo(x, y);
    x++;
  }

  function showAxes() {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    let xMin = 0;

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(128,128,128)';

    ctx.moveTo(xMin, height / 2);
    ctx.lineTo(width, height / 2);

    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);

    ctx.stroke();
  }

  function draw() {
    let canvas = document.getElementById('lienzoydata');
    let context = canvas.getContext('2d');

    context.clearReact(0, 0, 500, 500);
    showAxes(context);
    context.save();

    plotSine(context, step, 50);
    context, restore();

    step += 4;
    window.webkitRequestAnimationFrame(draw);
  }

  window.webkitRequestAnimationFrame(draw);
  window.onresize = actualizar;
  c.onmousedown = actualizar;

  actualizar();
  animacion();
  draw();
}
