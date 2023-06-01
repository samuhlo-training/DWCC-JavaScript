# DOCUMENTACION PROYECTO

# SUDOKU REACT
Link a la pagina con el proyecto desplegado : [SUDOKU](https://samu13.github.io/SudokuReact/)



A continuación detallo los pasos que segui para la creación de este proyecto :
## 1. Creación del Proyecto
Comencé mi proyecto con la creación de una nueva aplicación de React, utilizando create-react-app. Después, instalé y configuré mi entorno de desarrollo.
## 2. Diseño de la estructura de datos
Diseñé una estructura de datos para representar las cuadrículas de Sudoku de diferentes dificultades (fácil, medio y difícil). Cada cuadrícula es un array de arrays, donde cada subarray representa una fila en la cuadrícula de Sudoku.
## 3. Implementación del Tablero de Sudoku
Implementé un componente de tablero de Sudoku que se renderiza basándose en la estructura de datos que definí en el paso anterior. Usé las características de React para renderizar dinámicamente cada celda en la cuadrícula.
## 4. Implementación de la Lógica de Sudoku
Implementé varias funciones para controlar la lógica del juego de Sudoku. Esto incluye funciones para verificar si un movimiento es válido (comprobarMovimiento) y para resolver la cuadrícula de Sudoku (resolverSudoku).
## 5. Agregado de la Lógica del Tiempo
Incorporé un temporizador para rastrear cuánto tiempo ha pasado desde que se inició el juego. Usé el Hook useEffect para actualizar el tiempo transcurrido cada segundo y el Hook useState para almacenar la cantidad de tiempo transcurrido.
## 6. Incorporación de la Funcionalidad de Pausa
Añadí la capacidad de pausar el temporizador, permitiendo a los jugadores detener el reloj si necesitan tomar un descanso. Utilicé el Hook useState para rastrear si el juego está actualmente en pausa.
## 7. Selección de Dificultad
Implementé la selección de dificultad para que los usuarios puedan elegir entre fácil, medio y difícil. Usé el Hook useState para rastrear la dificultad actual y el Hook useEffect para actualizar la cuadrícula de Sudoku cuando la dificultad cambia.https://samu13.github.io/SudokuReact/ aplicación para que pueda revisarlos y tener un registro de todo el proceso de desarrollo.


### Lo siguiente será corregir fallos, como una vez escrito un número válido, poder escribir más números, y agregar nuevas funcionalidades, como por ejemplo: la de ayuda, que muestre un número más, la de generar tableros y no tenerlos guardados en arrays, la función del teclado … También me gustaría meter alguna otra forma de ingresar los números e implementar el error.
-


# DOCUMENTACION FIJA DE CREATE REACT APP

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
