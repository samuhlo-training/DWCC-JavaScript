import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // Aquí se inicializa el estado de la tabla de sudoku
  const sudokuInicial = [
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
  const [sudokuGrid, setSudokuGrid] = useState(sudokuInicial);

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

  // Aquí se inicializa el estado de la dificultad
  const [dificultad, setDificultad] = useState("Fácil");

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

  //Para verificar si el juego se ha ganado es facil, coges la cuadrícula del Sudoku y verifica si todas las celdas tienen un número distinto de cero.
  function isWin(sudokuGrid) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudokuGrid[i][j] === 0) {
          return false;
        }
      }
    }

    return true;
  }

  return (
    <div className="tablero_juego">
      {/*Aqui creo la celda, haciendo un map del estado de sudokuGrid. Crea un div por columna, y dentro les mete un input, con una ternaria para si el valor es 0 dejar el input vacio y si no poner el valor, con un trigger de onChange para actualizar el valor de la celda. Por cierto, tambien agregue un ternario para la clase, asi cuando la celda sea diferente a 0 agregara la clase activada para cambiar el color del fondo*/}
      <div className="tablero_sudoku">
        <h1 className="titulo">SUDOKU</h1>
        {sudokuGrid.map((row, i) => (
          <div className="fila" key={i}>
            {row.map((cell, j) => (
              <input
                className={`celda ${cell !== 0 ? "activada" : ""}`}
                key={j}
                value={cell === 0 ? "" : cell}
                onChange={(e) => {
                  // Creamos una copia de la cuadrícula
                  const newSudokuGrid = [...sudokuGrid];
                  // Pasamos el nuevo numero a entero, si no es un número, se pasa a 0
                  const nuevoNumero = parseInt(e.target.value) || 0;
                  //Usamos la funcion comprobarMovimiento para verificar si el movimiento es valido
                  if (comprobarMovimiento(newSudokuGrid, nuevoNumero, i, j)) {
                    // Si el movimiento es valido, actualizamos la cuadrícula
                    newSudokuGrid[i][j] = nuevoNumero;
                    //Actualizamos el estado de la cuadrícula con la nueva cuadrícula, actualiza el hook de la cuadricula
                    setSudokuGrid(newSudokuGrid);
                  } else {
                    // Aqui se maneja el caso del numero invalido
                    alert("Movimiento invalido");
                  }
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {/*Aqui agrego los botones*/}
      <div className="botones">
        <div className="botones_arriba">
          {/*Aqui agrego el boton del tiempo, donde meto la opcion que al clickar llame a la funcion poner en pausa si no esta en pausa, y si no esta hago una funcion ternaria para si es menor de 10, me ponga un 0 delante de los segundos. Lugo agrego otra funcion ternaria para que me cambie de resume a pausa segun el estado de pausa.*/}
          <button className="btn--tiempo" onClick={() => setPausa(!pausa)}>
            Tiempo: {minutos}:{segundos < 10 ? "0" + segundos : segundos}
            <br></br>
            {pausa ? "Resumir" : "Pausar"}
          </button>

          {/*Aqui agrego el boton de dificultad el cual es un select con opciones que al cambiar cambia el hook de dificultad*/}
          <select
            className="btn--dificultad"
            value={dificultad}
            onChange={(e) => setDificultad(e.target.value)}
          >
            <option value="easy">Fácil</option>
            <option value="medium">Medio</option>
            <option value="hard">Difícil</option>
          </select>
        </div>
        <div className="botones_abajo">
          {/*Aqui agrego un event listener de click, que llama a la funcion resolverSudoku y luego usando el hook de setSudokuGrid para cambiar a la plantilla resuelta. Tambien le meto las funciones del tiempo*/}
          <button
            className="btn--opciones"
            onClick={() => {
              const nuevaCuadricula = [...sudokuGrid];
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
              // Reinicia el temporizador y reanúdalo
              setTiempoTranscurrido(0);
              setPausa(false);
              setSudokuGrid([...sudokuInicial]);
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
