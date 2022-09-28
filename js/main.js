let weatherInfo = {
    loc: null,
    K: null,
    F: null,
    C: null,
    con: null,
    img: null,
};

function createElement(name, aType, cName, eId, bType, parent, text, varName) {
    name = document.createElement(aType);
        name.className = cName;
        name.id = eId;
        name.type = bType;
        parent.appendChild(name);
        name.innerText = text;
        //square brackets are used here to allow a parameter to be passed in dynamically
        window[varName] = document.getElementById(eId);
}

function createPage() {
  window.body = document.querySelector('body');
  createElement('headCol', 'div', 'container-fluid text-white', 'headCon', null, body, '5CAST "Better than a forecast."', 'HC');
  createElement('zipCol', 'div', 'container d-flex', 'zipCon', null, body, null, 'ZC');
  createElement('input', 'input', 'col-3', 'input', 'number', ZC, null, 'input');
  createElement('submit', 'button', 'col-3', 'goButton', null, ZC, 'Get your 5CAST!', 'goButton');
  createElement('loCol', 'div', 'container d-flex', 'locCon', null, body, null, 'LC');
  createElement('locRow1', 'div', 'row', 'locRow1', null, LC, 'LOCATION:', 'LR1');
  createElement('locRow2', 'div', 'row', 'locRow2', null, LC, null, 'LR2');
  createElement('loc', 'div', 'col', 'loc', null, LR2, null, 'loc');
  createElement('tempCol', 'div', 'container d-flex', 'tempCon', null, body, null, 'TC');
  createElement('tempRow1', 'div', 'row', 'tempRow1', null, TC, 'TEMPERATURE:', 'TR1');
  createElement('tempRow2', 'div', 'row', 'tempRow2', null, TC, null, 'TR2');
  createElement('tempK', 'div', 'temps col-3', 'tempK', null, TR2, null, 'tempK');
  createElement('tempF', 'div', 'temps col-3', 'tempF', null, TR2, null, 'tempF');
  createElement('tempC', 'div', 'temps col-3', 'tempC', null, TR2, null, 'tempC');
  createElement('conCol', 'div', 'container d-flex', 'conCon', null, body, null, 'CC');
  createElement('conRow1', 'div', 'row', 'conRow1', null, CC, 'CONDITION:', 'CR1');
  createElement('conRow2', 'div', 'row', 'conRow2', null, CC, null, 'CR2');
  createElement('condition', 'div', 'col', 'condition', null, CR2, null, 'condition');
  createElement('imgCol', 'div', 'container d-flex', 'imgCon', null, body, null, 'IC');
  createElement('image', 'div', 'col', 'image', null, IC, null, 'image');

  goButton.addEventListener('click', function() {
    let zipcode = input.value
    let API = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${APIKey}`;
    getWeatherData(API);
  });
}

createPage();

const APIKey = '0df3bd48560ad03c51a4637c5db0548e';

async function getWeatherData(url) {
  try {
    const response = await axios.get(url);
    weatherInfo.loc = response.data.name;
    weatherInfo.K = Math.round(response.data.main.temp);
    weatherInfo.F = Math.round(((weatherInfo.K) - 273.15) * (9/5) + 32);
    weatherInfo.C = Math.round(weatherInfo.K - 273.15);
    weatherInfo.con = response.data.weather[0].description;
    loc.innerText = weatherInfo.loc;
    tempK.innerText = `Kelvin : ${weatherInfo.K}`;
    tempF.innerText = `Fahrenheit : ${weatherInfo.F}`;
    tempC.innerText = `Celcius : ${weatherInfo.C}`;
    condition.innerText = weatherInfo.con;
    console.log(response.data);
    console.log(weatherInfo)
  } catch (error) {
    console.log(error);
  }
}
