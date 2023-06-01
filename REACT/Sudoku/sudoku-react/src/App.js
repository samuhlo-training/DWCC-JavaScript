import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // Aquí se inicializa el estado de la tabla de sudoku

  const sudokuFacil = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const sudokuMedio = [
    [0, 0, 0, 0, 0, 6, 0, 9, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 8, 5, 3, 0, 0, 0, 0],
    [0, 1, 0, 0, 8, 0, 0, 0, 0],
    [4, 0, 0, 6, 0, 3, 0, 0, 1],
    [0, 0, 0, 0, 2, 0, 0, 5, 0],
    [0, 0, 0, 0, 1, 8, 2, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 7],
    [0, 9, 0, 4, 0, 0, 0, 0, 0],
  ];

  const sudokuDificil = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 8, 5],
    [0, 0, 1, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 7, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 1, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 7, 3],
    [0, 0, 2, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 9],
  ];

  // Define los tableros iniciales
  const sudokuFacilInicial = sudokuFacil.map((fila) => [...fila]);
  const sudokuMedioInicial = sudokuMedio.map((fila) => [...fila]);
  const sudokuDificilInicial = sudokuDificil.map((fila) => [...fila]);

  const [sudokuGrid, setSudokuGrid] = useState(sudokuFacilInicial);

  // Aquí se inicializa el estado del tiempo transcurrido y el estado de pausa
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [pausa, setPausa] = useState(false);

  // Aqui usamos el usEffect para establecer un intevalo de tiempo de un segundo, lo que sumara al tiempo transcurrido un segundo cada vez que se ejecute, si no esta en pausa, si esta en pausa no se ejecuta.
  //Luego se usa el return para limpiar el intervalo.
  //Por ultimo se usa el hook de tiempo transcurrido para calcular los minutos y segundos.

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (!pausa) {
        setTiempoTranscurrido((tiempoTranscurrido) => tiempoTranscurrido + 1);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [pausa]);

  const minutos = Math.floor(tiempoTranscurrido / 60);
  const segundos = tiempoTranscurrido % 60;

  // Aquí se inicializa el estado de la dificultad. Se usa el hook de useState para inicializarlo a "Fácil". Luego se usa el hook de useEffect para cambiar el estado de la cuadrícula de sudoku dependiendo de la dificultad. Utilizo un switch para seleccionar la dificultad.
  const [dificultad, setDificultad] = useState("Fácil");
  useEffect(() => {
    switch (dificultad) {
      case "facil":
        setSudokuGrid([...sudokuFacil]);
        break;
      case "medio":
        setSudokuGrid([...sudokuMedio]);
        break;
      case "dificil":
        setSudokuGrid([...sudokuDificil]);
        break;
      default:
        setSudokuGrid([...sudokuFacil]);
    }
  }, [dificultad]);

  function comprobarMovimiento(sudokuGrid, numero, fila, columna) {
    // Verifica la fila y la columna recoriendolos con un for
    for (let i = 0; i < 9; i++) {
      if (sudokuGrid[i][columna] === numero || sudokuGrid[fila][i] === numero) {
        return false;
      }
    }

    // Verifica el cuadrado 3x3 recoriendo la fila y la columna con un for, antes de eso se calcula el inicio de la fila y columna con un Math.floor y se reduce a un cuadrado.
    const empezarFila = Math.floor(fila / 3) * 3;
    const empezarColumna = Math.floor(columna / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (sudokuGrid[empezarFila + i][empezarColumna + j] === numero) {
          return false;
        }
      }
    }

    return true;
  }

  //Aqui empezamos con la logica para resolver el sudoku. Lo vamos hacer con un enfoque de retroceso (backtracking), que es un algoritmo recursivo que va probando soluciones hasta encontrar la correcta.
  //El enfoque de retroceso implica tratar de llenar las celdas una por una, de izquierda a derecha y de arriba a abajo. Si en algún momento determinamos que no podemos seguir adelante, retrocedemos (es decir, cambiamos nuestra elección anterior) y probamos una opción diferente.
  //Primero, creo una función esSeguro para comprobar si un número dado se puede colocar en una celda dada. Es similar a la función comprobarMovimiento que ya he creado, pero se utilizará específicamente para el proceso de resolución

  function esSeguro(sudokuGrid, fila, columna, numero) {
    // Verifica la fila y la columna
    for (let i = 0; i < 9; i++) {
      if (sudokuGrid[i][columna] === numero || sudokuGrid[fila][i] === numero) {
        return false;
      }
    }

    // Verifica el cuadrado 3x3
    const empezarFila = Math.floor(fila / 3) * 3;
    const empezarColumna = Math.floor(columna / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (sudokuGrid[empezarFila + i][empezarColumna + j] === numero) {
          return false;
        }
      }
    }

    return true;
  }
  //Ahora, implemento la función resolverSudoku. Esta función usará recursión y retroceso.

  function resolverSudoku(sudokuGrid, fila = 0, columna = 0) {
    // Si hemos llegado a la última celda, entonces hemos resuelto el Sudoku
    if (fila === 9) {
      return true;
    }

    // Si la celda actual está ya llena, pasamos a la siguiente
    if (sudokuGrid[fila][columna] !== 0) {
      return resolverSudoku(
        sudokuGrid,
        columna === 8 ? fila + 1 : fila,
        (columna + 1) % 9
      );
    }

    // Probamos números del 1 al 9 para la celda actual
    for (let numero = 1; numero <= 9; numero++) {
      // Si el número es seguro en la celda actual
      if (esSeguro(sudokuGrid, fila, columna, numero)) {
        // Lo colocamos en la celda
        sudokuGrid[fila][columna] = numero;

        // Recursivamente probamos llenar el resto del Sudoku
        if (
          resolverSudoku(
            sudokuGrid,
            columna === 8 ? fila + 1 : fila,
            (columna + 1) % 9
          )
        ) {
          return true;
        }

        // Si no pudimos llenar el resto del Sudoku después de poner el número,
        // entonces este número es incorrecto. Lo quitamos y probamos con el siguiente número.
        sudokuGrid[fila][columna] = 0;
      }
    }

    // Si hemos probado todos los números y ninguno funcionó, entonces este Sudoku no tiene solución
    return false;
  }

  return (
    <div className="tablero_juego">
      <div className="tablero_sudoku">
        <h1 className="titulo">SUDOKU</h1>
        {/*Aqui creo la celda, haciendo un map del estado de sudokuGrid. Crea un tr por fila, y dentro les mete un tr con un input, con una ternaria para si el valor es 0 dejar el input vacio y si no poner el valor, con un trigger de onChange para actualizar el valor de la celda. Por cierto, tambien agregue un ternario para la clase, asi cuando la celda sea diferente a 0 agregara la clase activada para cambiar el color del fondo.*/}
        <table>
          <tbody>
            {sudokuGrid.map((row, i) => (
              <tr
                className={`fila ${i === 2 || i === 5 ? "abBorde" : ""}`}
                key={i}
              >
                {/*Aqui agregue otro ternario para incluir en las filas 3 y 6 una clase con el border botton mas ancho, y en la de abajo lo mismo pero en el borde derecho. Con esto consigo dar forma mas visible los cuadrados de 3x3 .*/}
                {row.map((cell, j) => (
                  <td key={j}>
                    <input
                      className={`celda ${cell !== 0 ? "activada" : ""} ${
                        j === 2 || j === 5 ? "deBorder" : ""
                      }`}
                      value={cell === 0 ? "" : cell}
                      onChange={(e) => {
                        // Creamos una copia de la cuadrícula
                        const newSudokuGrid = [...sudokuGrid];
                        // Pasamos el nuevo numero a entero, si no es un número, se pasa a 0
                        const nuevoNumero = parseInt(e.target.value) || 0;
                        //Usamos la funcion comprobarMovimiento para verificar si el movimiento es valido
                        if (
                          comprobarMovimiento(newSudokuGrid, nuevoNumero, i, j)
                        ) {
                          // Si el movimiento es valido, actualizamos la cuadrícula
                          newSudokuGrid[i][j] = nuevoNumero;
                          //Actualizamos el estado de la cuadrícula con la nueva cuadrícula, actualiza el hook de la cuadricula
                          setSudokuGrid(newSudokuGrid.map((fila) => [...fila]));
                        } else {
                          // Aqui se maneja el caso del numero invalido
                          alert("Movimiento invalido");
                        }
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*Aqui agrego los botones*/}
      <div className="botones">
        <div className="botones_arriba">
          {/*Aqui agrego el boton del tiempo, donde meto la opcion que al clickar llame a la funcion poner en pausa si no esta en pausa, y si no esta hago una funcion ternaria para si es menor de 10, me ponga un 0 delante de los segundos. Luego agrego otra funcion ternaria para que me cambie de resume a pausa segun el estado de pausa. Por ultimo en las clases le agrego otra ternaria mas para que me haga un check de si esta en pausa o no, y me agregue una clase para tener el fondo fijo*/}
          <button
            className={`btn--opciones btn-tiempo ${pausa ? "btn-pausa" : ""}`}
            onClick={() => setPausa(!pausa)}
          >
            Tiempo: {minutos}:{segundos < 10 ? "0" + segundos : segundos}
            <br></br>
            {pausa ? "Resumir" : "Pausar"}
          </button>

          {/*Aqui agrego el boton de dificultad el cual es un select con opciones que al cambiar cambia el hook de dificultad. Cuando se cambia llama al hook de setDificultad y lo cambia por el valor elegido*/}
          <select
            className="btn--opciones btn-dificultad"
            value={dificultad}
            onChange={(e) => setDificultad(e.target.value)}
          >
            <option value="facil">Fácil</option>
            <option value="medio">Medio</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>
        <div className="botones_abajo">
          {/*Aqui agrego un event listener de click, que llama a la funcion resolverSudoku y luego usando el hook de setSudokuGrid para cambiar a la plantilla resuelta. Tambien le meto las funciones del tiempo. Tube que hacer una correccion con un switch de dificultad, para que pille el tablero inicial a resolver, si no, si algun numero de los puestos va mal, daria sin solucion*/}
          <button
            className="btn--opciones"
            onClick={() => {
              let nuevaCuadricula;
              switch (dificultad) {
                case "facil":
                  nuevaCuadricula = [...sudokuFacilInicial];
                  break;
                case "medio":
                  nuevaCuadricula = [...sudokuMedioInicial];
                  break;
                case "dificil":
                  nuevaCuadricula = [...sudokuDificilInicial];
                  break;
                default:
                  nuevaCuadricula = [...sudokuFacilInicial];
              }
              if (resolverSudoku(nuevaCuadricula)) {
                // Detiene el temporizador y lo reinicia
                setTiempoTranscurrido(0);
                setPausa(true);
                setSudokuGrid(nuevaCuadricula);
              } else {
                alert("Este Sudoku no tiene solución");
              }
            }}
          >
            Evaluar solucion
          </button>
          {/*Aqui agrego un event listener de click, que cambia el hook de setSudokuGrid al sudokuInicial, limpiando asi los numeros que pusimos. Tambien le meto una las funciones del tiempo*/}
          <button
            className="btn--opciones"
            onClick={() => {
              // Reinicia el temporizador y reanuda
              setPausa(false);

              // Reinicia el tablero de acuerdo con la dificultad seleccionada
              switch (dificultad) {
                case "facil":
                  setSudokuGrid([...sudokuFacilInicial]);
                  break;
                case "medio":
                  setSudokuGrid([...sudokuMedioInicial]);
                  break;
                case "dificil":
                  setSudokuGrid([...sudokuDificilInicial]);
                  break;
                default:
                  setSudokuGrid([...sudokuFacilInicial]);
              }
            }}
          >
            Limpiar/Nuevo
          </button>
          <button className="btn--opciones">Ayuda</button>
        </div>
      </div>
    </div>
  );
}

export default App;
