function loadSurvey(url, params) {
  // Convertir los parámetros a una cadena de consulta
  const queryString = new URLSearchParams(params).toString();

  // Enviar la petición
  fetch(`${url}?${queryString}`)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      // Aquí, data debería ser un objeto Document que representa el XML que devolvió la API
      // Vamos a asumir que la descripción y el resumen están en elementos <description> y <dtstart> respectivamente
      console.log(data);
      for (
        let i = 0;
        i < data.getElementsByTagName("description").length;
        i++
      ) {
        const descripcion =
          data.getElementsByTagName("description")[i].textContent;
        const resumen = data.getElementsByTagName("dtstart")[i].textContent;
        // Mostrar estos datos en una tabla con id="surveyTable"
        const table = document.getElementById("surveyTable");
        table.innerHTML += `
           
           <tr>
             <td>${descripcion}</td>
             <td>${resumen}</td>
           </tr>
         `;
      }

      // Mostrar estos datos en una tabla con id="surveyTable"
      const table = document.getElementById("surveyTable");
      table.innerHTML += `
          
          <tr>
            <td>${descripcion}</td>
            <td>${resumen}</td>
          </tr>
        `;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Usar la función para cargar la encuesta de población activa (IPI) para el año 2019
loadSurvey("https://api.idescat.cat/cal/v1/dades.xml", { t: 2019, id: "IPI" });
