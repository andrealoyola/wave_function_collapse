const celdas = []; //4x4
const RETICULA = 12;
let alto; //altura de celda
let ancho; //anchura de celda

const azulejos = [];

let opcionesI = [];

const reglas = [
  //reglas de bordes de cada azulejos
  {
    //tile 0
    UP: 14,
    RIGHT: 0,
    DOWN: 13,
    LEFT: 10,
  },
  {
    //tile 1
    UP: 15,
    RIGHT: 12,
    DOWN: 6,
    LEFT: 0,
  },
  {
    //tile 2
    UP: 12,
    RIGHT: 6,
    DOWN: 17,
    LEFT: 10,
  },
  {
    //tile 3
    UP: 6,
    RIGHT: 11,
    DOWN: 7,
    LEFT: 6,
  },
  {
    //tile 4
    UP: 17,
    RIGHT: 7,
    DOWN: 14,
    LEFT: 10,
  },
  {
    //tile 5
    UP: 7,
    RIGHT: 11,
    DOWN: 8,
    LEFT: 7,
  },
  {
    //tile 6
    UP: 8,
    RIGHT: 11,
    DOWN: 14,
    LEFT: 10,
  },
  {
    //tile 7
    UP: 15,
    RIGHT: 0,
    DOWN: 12,
    LEFT: 11,
  },
  {
    //tile 8
    UP: 0,
    RIGHT: 3,
    DOWN: 3,
    LEFT: 50,
  },
  {
    //tile 9
    UP: 3,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 16,
  },
  {
    //tile 10
    UP: 50,
    RIGHT: 50,
    DOWN: 13,
    LEFT: 50,
  },
  {
    //tile 11
    UP: 13,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 12
    UP: 2,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 3,
  },
  {
    //tile 13
    UP: 12,
    RIGHT: 7,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 14
    UP: 50,
    RIGHT: 50,
    DOWN: 16,
    LEFT: 50,
  },
  {
    //tile 15
    UP: 16,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 22,
  },
  {
    //tile 16
    UP: 50,
    RIGHT: 15,
    DOWN: 5,
    LEFT: 1,
  },
  {
    //tile 17
    UP: 5,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 18
    UP: 2,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 13,
  },
  {
    //tile 19
    UP: 1,
    RIGHT: 2,
    DOWN: 50,
    LEFT: 7,
  },
  {
    //tile 20
    UP: 50,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 22,
  },
  {
    //tile 21
    UP: 50,
    RIGHT: 1,
    DOWN: 50,
    LEFT: 1,
  },
  {
    //tile 22
    UP: 1,
    RIGHT: 2,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 23
    UP: 50,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 24
    UP: 2,
    RIGHT: 50,
    DOWN: 23,
    LEFT: 12,
  },
  {
    //tile 25
    UP: 23,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 13,
  },
  {
    //tile 26
    UP: 50,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 50,
  },
  {
    //tile 27
    UP: 50,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 28
    UP: 2,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 3,
  },
  {
    //tile 29
    UP: 0,
    RIGHT: 3,
    DOWN: 3,
    LEFT: 50,
  },
  {
    //tile 30
    UP: 3,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 16,
  },
  {
    //tile 31
    UP: 50,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 22,
  },
  {
    //tile 32
    UP: 1,
    RIGHT: 9,
    DOWN: 11,
    LEFT: 50,
  },
  {
    //tile 33
    UP: 5,
    RIGHT: 50,
    DOWN: 10,
    LEFT: 9,
  },
  {
    //tile 34
    UP: 10,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 8,
  },
  {
    //tile 35
    UP: 11,
    RIGHT: 8,
    DOWN: 50,
    LEFT: 9,
  },
  {
    //tile 36
    UP: 9,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 4,
  },
  {
    //tile 37
    UP: 50,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 22,
  },
  {
    //tile 38
    UP: 1,
    RIGHT: 2,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 39
    UP: 5,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 40
    UP: 50,
    RIGHT: 3,
    DOWN: 3,
    LEFT: 50,
  },
  {
    //tile 41
    UP: 2,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 3,
  },
  {
    //tile 42
    UP: 3,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 16,
  },
  {
    //tile 43
    UP: 50,
    RIGHT: 50,
    DOWN: 14,
    LEFT: 50,
  },
  {
    //tile 44
    UP: 14,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 50,
  },
  {
    //tile 45
    UP: 50,
    RIGHT: 15,
    DOWN: 5,
    LEFT: 1,
  },
  {
    //tile 46
    UP: 1,
    RIGHT: 2,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 47
    UP: 5,
    RIGHT: 50,
    DOWN: 3,
    LEFT: 2,
  },
  {
    //tile 48
    UP: 3,
    RIGHT: 50,
    DOWN: 7,
    LEFT: 50,
  },
  {
    //tile 49
    UP: 7,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 50
    UP: 50,
    RIGHT: 50,
    DOWN: 17,
    LEFT: 50,
  },
  {
    //tile 51
    UP: 17,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 52
    UP: 2,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 3,
  },
  {
    //tile 53
    UP: 0,
    RIGHT: 3,
    DOWN: 3,
    LEFT: 50,
  },
  {
    //tile 54
    UP: 3,
    RIGHT: 4,
    DOWN: 8,
    LEFT: 16,
  },
  {
    //tile 55
    UP: 8,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 56
    UP: 50,
    RIGHT: 0,
    DOWN: 19,
    LEFT: 0,
  },
  {
    //tile 57
    UP: 50,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 58
    UP: 19,
    RIGHT: 3,
    DOWN: 3,
    LEFT: 50,
  },
  {
    //tile 59
    UP: 2,
    RIGHT: 10,
    DOWN: 50,
    LEFT: 3,
  },
  {
    //tile 60
    UP: 50,
    RIGHT: 11,
    DOWN: 50,
    LEFT: 10,
  },
  {
    //tile 61
    UP: 12,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 11,
  },
  {
    //tile 62
    UP: 3,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 16,
  },
  {
    //tile 63
    UP: 50,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 64
    UP: 50,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 65
    UP: 50,
    RIGHT: 50,
    DOWN: 15,
    LEFT: 50,
  },
  {
    //tile 66
    UP: 15,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 0,
  },
  {
    //tile 67
    UP: 2,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 3,
  },
  {
    //tile 68
    UP: 0,
    RIGHT: 3,
    DOWN: 3,
    LEFT: 16,
  },
  {
    //tile 69
    UP: 3,
    RIGHT: 50,
    DOWN: 3,
    LEFT: 50,
  },
  {
    //tile 70
    UP: 3,
    RIGHT: 4,
    DOWN: 50,
    LEFT: 14,
  },
  {
    //tile 71
    UP: 50,
    RIGHT: 50,
    DOWN: 18,
    LEFT: 50,
  },
  {
    //tile 72
    UP: 18,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 22,
  },
  {
    //tile 73
    UP: 1,
    RIGHT: 2,
    DOWN: 50,
    LEFT: 50,
  },
  {
    //tile 74
    UP: 5,
    RIGHT: 50,
    DOWN: 2,
    LEFT: 2,
  },
  {
    //tile 75
    UP: 2,
    RIGHT: 50,
    DOWN: 20,
    LEFT: 50,
  },
  {
    //tile 76
    UP: 20,
    RIGHT: 50,
    DOWN: 50,
    LEFT: 13,
  },
  {
    //tile 77
    UP: 14,
    RIGHT: 10,
    DOWN: 15,
    LEFT: 11,
  },
];

const NA = reglas.length; //número de azulejos

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  celdas[8].colapsada = true;
  celdas[3].colapsada = true;

  celdas[12].opciones = [5, 6, 8];
  celdas[4].opciones = [4, 7, 12];
  celdas[6].opciones = [9, 7, 12];
  celdas[1].opciones = [6, 4, 8, 10];
  celdas[5].opciones = [11, 6, 4, 8, 10];
}

function draw() {
  //background(250, 120, 10);

  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });

  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });
    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    //print(celdaSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceDeAzulejo];
          //print(reglasActuales);
          image(azulejos[indiceDeAzulejo], x * ancho, y * alto, ancho, alto);

          //Monitorear entropía UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {
              cambiarOrden(celdaUP, reglasActuales["UP"], "DOWN");
            }
          }
          //Monitorear entropía RIGHT
          if (x < RETICULA - 1) {
            const indiceRIGHT = x + 1 + y * RETICULA;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarOrden(celdaRIGHT, reglasActuales["RIGHT"], "LEFT");
            }
          }
          //Monitorear entropía DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarOrden(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }
          //Monitorear entropía LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarOrden(celdaLEFT, reglasActuales["LEFT"], "RIGHT");
            }
          }
        } else {
          //strokeWeight(5);
          //rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
    //noLoop();
  } else {
    //for (let i = 0; i < RETICULA * RETICULA; i++) {
    //celdas[i] = {
    //colapsada: false,
    //opciones: opcionesI,
    //};
    //}
  }
}

function cambiarOrden(_celda, _regla, _opuesta) {
  console.log("Celda recibida:", _celda);
  console.log("Regla recibida:", _regla);
  console.log("Dirección opuesta:", _opuesta);

  if (!_celda || !_celda.opciones) {
    console.error("Celda no válida o sin opciones:", _celda);
    return;
  }

  if (!reglas[_regla]) {
    console.error("Regla no válida:", _regla);
    return;
  }

  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    const opcionActual = _celda.opciones[i];
    const reglaActual = reglas[opcionActual];
    console.log("Analizando opción:", opcionActual, "Regla actual:");

    if (!reglaActual || reglaActual[_opuesta] === undefined) {
      console.error(
        `Regla inválida o clave '${_opuesta}' no encontrada para opción`,
        opcionActual,
        reglaActual
      );
      continue;
    }

    if (_regla == reglas[_celda.opciones[i]][_opuesta]) {
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  print(nuevasOpciones);
}
