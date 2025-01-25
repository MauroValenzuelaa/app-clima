let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar recargar la página

    let ciudad = document.getElementById("ciudad").value;
    console.log(ciudad);

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=55a89c10111fbdd5e60866183361a7d8&units=metric`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);

            // Crear elementos <p> y añadir el texto
            let descripcionP = document.createElement("p");
            descripcionP.textContent = `${data.main.temp}°`;
            let temperaturaP = document.createElement("p");
            temperaturaP.textContent = `${data.weather[0].description}`;
            let sensacionT = document.createElement("p");
            sensacionT.textContent = `S.Termica: ${data.main.feels_like}º`;
            let temperaturaMin = document.createElement("p");
            temperaturaMin.textContent = `Minima: ${data.main.temp_min}º`;
            let temperaturaMax = document.createElement("p");
            temperaturaMax.textContent = `Maxima: ${data.main.temp_max}º`;
            let humedad = document.createElement("p");
            humedad.textContent = `Humedad: ${data.main.humidity}%`;

            // Limpiar contenido anterior y añadir los nuevos elementos
            let resultDiv = document.getElementById("result");
            let result2Div = document.getElementById("result2");
            let result3Div = document.getElementById("result3");
            let result4Div = document.getElementById("result4");
            let result5Div = document.getElementById("result5");
            let result6Div = document.getElementById("result6");
            resultDiv.innerHTML = ""; // Limpiar contenido anterior
            result2Div.innerHTML = ""; // Limpiar contenido anterior
            result3Div.innerHTML = "";
            result4Div.innerHTML = "";
            result5Div.innerHTML = "";
            result6Div.innerHTML = "";

            resultDiv.appendChild(descripcionP);
            result2Div.appendChild(temperaturaP);
            result3Div.appendChild(sensacionT);
            result4Div.appendChild(temperaturaMin);
            result5Div.appendChild(temperaturaMax);
            result6Div.appendChild(humedad);
        })
        .catch((error) => {
            console.error("Error:", error);

            let errorP = document.createElement("p");
            errorP.textContent = "Error.";

            let error2P = document.createElement("p");
            error2P.textContent =
                "Error al obtener la temperatura. Intente nuevamente.";

            let error3P = document.createElement("p");
            error3P.textContent =
                "Error al obtener la sensacion terminca. Intente nuevamente.";

            let error4P = document.createElement("p");
            error4P.textContent =
                "Error al obtener la temperatura minima. Intente nuevamente.";

            let error5P = document.createElement("p");
            error5P.textContent =
                "Error al obtener la temperatura maxima. Intente nuevamente.";

            let error6P = document.createElement("p");
            error6P.textContent =
                "Error al obtener la humedad. Intente nuevamente.";

            let resultDiv = document.getElementById("result");
            let result2Div = document.getElementById("result2");

            let result3Div = document.getElementById("result3");
            let result4Div = document.getElementById("result4");
            let result5Div = document.getElementById("result5");
            let result6Div = document.getElementById("result6");
            resultDiv.innerHTML = ""; // Limpiar contenido anterior
            result2Div.innerHTML = ""; // Limpiar contenido anterior
            result3Div.innerHTML = ""; // Limpiar contenido anterior
            result4Div.innerHTML = ""; // Limpiar contenido anterior
            result5Div.innerHTML = ""; // Limpiar contenido anterior
            result6Div.innerHTML = ""; // Limpiar contenido anterior

            resultDiv.appendChild(errorP);
            result2Div.appendChild(error2P);

            result3Div.appendChild(error3P);
            result4Div.appendChild(error4P);
            result5Div.appendChild(error5P);
            result6Div.appendChild(error6P);
        });
});
