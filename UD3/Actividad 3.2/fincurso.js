//EJERCICIO: u3e1_fincurso
//Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).Recuerda que los meses empiezan desde el número 0.

function daysUntilEndOfCourse() {
  let today = new Date();
  let endOfCourse = new Date(today.getFullYear(), 5, 24);

  if (today > endOfCourse) {
    endOfCourse.setFullYear(endOfCourse.getFullYear() + 1);
  }

  let timeDiff = endOfCourse - today;
  let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  console.log(diffDays + " days left until the end of the course");
}
