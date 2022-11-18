fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/argentina?unitGroup=metric&key=7BPTM4CCMDZWEDCYYT9PF3XXC&contentType=json')
  .then(response => response.json())
  .then(data => {
       const today = data.days[0];
       const hours = today.hours;
       const now = new Date().getHours()
       const hourToFind = `${now}:00:00`
       let currentHour = hours.find(hour => hour.datetime === hourToFind)
       if (!currentHour) {
        currentHour = hours[0]
       }

       const temperature = currentHour.temp
       const mostrarClima = document.getElementById("temp")
       mostrarClima.innerHTML = `La temperatura actual es ${temperature}`;
    });


const DateTime = luxon.DateTime;
const inicio = DateTime.now();
const mostrarHora = document.getElementById("hora")
mostrarHora.innerHTML = `La fecha y hora actual es ${inicio.toLocaleString(DateTime.DATETIME_FULL)}`;

  

