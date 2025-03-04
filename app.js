let form = document.querySelector("form");
let Responce = document.querySelector("#Responce");
Responce.style.display = "none";
form.addEventListener("submit", async (event) => {
  let cityName = event.target.cityName.value;
  event.preventDefault();
  let fetchData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0f2fb94282ad6a3dbf2387c407b74806&units=metric`
  );
  Responce.style.display = "block";
  let finalRes = await fetchData.json();  
    if(finalRes.cod=="400" || finalRes.cod=="404"){
    
Responce.innerHTML='City Not Found'

    }
    else{
        let {name,sys,weather,main}=finalRes;
       
        Responce.innerHTML = ` 
                  <h2>${name} <mark>
                  ${sys.country}
                  </h2>
                  <h1>${main.temp}</h1>
                  <img src="https://openweathermap.org/img/w/${weather[0].icon}.png" alt="">
                  <p>${weather[0].description}</p>
        `;
    }

 
});
