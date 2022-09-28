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
  createElement('headCon', 'div', 'container-fluid text-white', 'headCon', null, body, '5CAST', 'HC');
  createElement('subHead', 'div', 'container-fluid text-white', 'subHead', null, body, '"Better than a forecast"', 'subHead');
  createElement('zipCon', 'div', 'container d-flex', 'zipCon', null, body, null, 'ZC');
    createElement('input', 'input', 'col-3 zipLine', 'input', 'number', ZC, null, 'input');
    createElement('submit', 'button', 'col-3 zipLine', 'goButton', null, ZC, 'Get your 5CAST!', 'goButton');
  createElement('loCon', 'div', 'container d-flex', 'locCon', null, body, null, 'LC');
    createElement('locRow', 'div', 'row', 'locRow', null, LC, null, 'LR');
      createElement('locCol', 'div', 'col', 'lCol', null, LR, null, 'LCL')
        createElement('tCard', 'div', 'card', 'lCard', null, LCL, null, 'lCard');
          createElement('cCardTitle', 'p', 'card-header', 'cCardTitle', null, lCard, 'LOCATION:', 'lCardTitle')
          createElement('loc', 'p', 'card-text li', 'loc', null, lCard, null, 'loc');
  createElement('tempCon', 'div', 'container d-flex', 'tempCon', null, body, null, 'TC');
    createElement('tempRow', 'div', 'row', 'tempRow', null, TC, null, 'TR');
      createElement('tempCol', 'div', 'col', 'tCol', null, TR, null, 'TCL')
        createElement('tCard', 'div', 'card', 'tCard', null, TCL, null, 'tCard');
          createElement('tCardTitle', 'p', 'card-header', 'tCardTitle', null, tCard, 'TEMPERATURE:', 'tCardTitle')
            createElement('tempList', 'ul', 'list-group list-group-flush', 'tempList', null, tCard, null, 'tempList' )  
              createElement('tempK', 'li', 'list-group-item li', 'tempK', null, tempList, null, 'tempK');
              createElement('tempF', 'li', 'list-group-item li', 'tempF', null, tempList, null, 'tempF');
              createElement('tempC', 'li', 'list-group-item li', 'tempC', null, tempList, null, 'tempC');
  createElement('conCon', 'div', 'container d-flex', 'conCon', null, body, null, 'CC');
    createElement('conRow', 'div', 'row', 'conRow', null, CC, null, 'CR');
      createElement('conCol1', 'div', 'col', 'cCol', null, CR, null, 'CCL')
        createElement('cCard', 'div', 'card', 'cCard', null, CCL, null, 'cCard');
          createElement('cCardTitle', 'p', 'card-header', 'cCardTitle', null, cCard, 'CONDITION:', 'cCardTitle')
            createElement('condition', 'p', 'card-text li', 'condition', null, cCard, null, 'condition');
  createElement('imgCon', 'div', 'container d-flex', 'imgCon', null, body, null, 'IC');
    createElement('image', 'div', 'col', 'image', null, IC, null, 'image');

  goButton.addEventListener('click', function() {
    let zipcode = input.value
    let API = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${APIKey}`;
    getWeatherData(API);
  });
}

createPage();
hide();

const APIKey = 'ef757abcb72ab4e6058f4663f531b267';

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
    unhide();
    // console.log(response.data);
    // console.log(weatherInfo)
  } catch (error) {
    alert('INVALID ZIPCODE');
  }
}

function hide() {
  LC.style.visibility = 'hidden';
  TC.style.visibility = 'hidden';
  CC.style.visibility = 'hidden';
}

function unhide() {
  LC.style.visibility = 'visible';
  TC.style.visibility = 'visible';
  CC.style.visibility = 'visible';
}