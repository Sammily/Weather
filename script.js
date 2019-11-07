document.getElementById("btn-print").onclick = function printData() {
  let place = document.getElementById("place").value;

  let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const xhr = new XMLHttpRequest();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=1e6115696a3a01745e742534ca9fadec`;
  xhr.responseType = "json";

  xhr.open("GET", url);

  let data = "";
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      data = JSON.parse(xhr.responseText);
      //console.log(data);
      document.getElementById("city").innerHTML = "Город: " + data["name"];
      let temp = Math.floor(data.main["temp"] - 273.15); //из кельвинов в цельсия
      document.getElementById("temperature").innerHTML =
        "Температура: " + (temp > 0 ? "+" : "") + temp;
    } else {
      //console.log(xhr.statusText);
      document.getElementById("city").innerHTML = "Город не найден";
      document.getElementById("temperature").innerHTML = "";
    }
  };
  xhr.send();
};

//открытие-закрытие бокового меню (если экран < 700)

document.getElementById("bars").onclick = function showMenu() {
  document.getElementById("nav-links").style.right = "0";
};
document.getElementById("close").onclick = function closeMenu() {
  document.getElementById("nav-links").style.right = "-200px";
};
