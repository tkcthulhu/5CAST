let zips = []; 
const APIKey = 'ef757abcb72ab4e6058f4663f531b267';

let weatherInfo = {
    loc: '',
    K: 0,
    F: 0,
    C: 0,
    con: '',
    icon: '', 
    mCon: '',
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
            createElement('tempList', 'ul', 'list-group list-group-flush li', 'tempList', null, tCard, null, 'tempList' )  
              createElement('tempK', 'li', 'list-group-item li', 'tempK', null, tempList, null, 'tempK');
              createElement('tempF', 'li', 'list-group-item li', 'tempF', null, tempList, null, 'tempF');
              createElement('tempC', 'li', 'list-group-item li', 'tempC', null, tempList, null, 'tempC');
  createElement('conCon', 'div', 'container d-flex', 'conCon', null, body, null, 'CC');
    createElement('conRow', 'div', 'row', 'conRow', null, CC, null, 'CR');
      createElement('conCol1', 'div', 'col', 'cCol', null, CR, null, 'CCL')
        createElement('cCard', 'div', 'card', 'cCard', null, CCL, null, 'cCard');
          createElement('cCardTitle', 'p', 'card-header', 'cCardTitle', null, cCard, 'CONDITION:', 'cCardTitle')
            createElement('condition', 'p', 'card-text li', 'condition', null, cCard, null, 'condition');
  createElement('popUp', 'div', 'popUp card', 'popUp', null, body, null, 'popUp');
    createElement('popUpText', 'h1', 'popUpText card-header', 'PUT', null, popUp, 'INVALID ZIPCODE', 'PUT');
    createElement('popUpButton', 'button', 'btn btn-danger', 'PUB', null, popUp, 'Please enter a valid zipcode to continue.', 'PUB');

  goButton.addEventListener('click', () => {
    let zipcode = input.value
    let API = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${APIKey}`;
    getWeatherData(API);
    saveZips(zipcode);
  });

  input.setAttribute('placeholder', 'Please enter your zipcode')
  PUB.addEventListener('click', () => popUpRemove);

}

function INIT() {
createPage();
textFadeIn();
hide();
geoSafari();
}

INIT(); 

const newsCastSound = new Audio('./sounds/News-Sound-Effect.mp3')


function saveZips(zipcode) {
  let zip = {
    zip: zipcode,
  }
  zips.push(zip);
  console.log(zips)
  
  localStorage.setItem('zipcodes', JSON.stringify(zips));
}

async function getWeatherData(url) {
  try {
    const response = await axios.get(url);
    weatherInfo.loc = response.data.name;
    weatherInfo.K = Math.round(response.data.main.temp);
    weatherInfo.F = Math.round(((weatherInfo.K) - 273.15) * (9/5) + 32);
    weatherInfo.C = Math.round(weatherInfo.K - 273.15);
    weatherInfo.con = response.data.weather[0].description;
    weatherInfo.icon = response.data.weather[0].icon;
    weatherInfo.mCon = response.data.weather[0].main;
    

    loc.innerText = weatherInfo.loc;
    tempK.innerText = `Kelvin : ${weatherInfo.K}`;
    tempF.innerText = `Fahrenheit : ${weatherInfo.F}`;
    tempC.innerText = `Celcius : ${weatherInfo.C}`;
    condition.innerHTML = `${weatherInfo.con} <img src='./img/${weatherInfo.icon}.png' id="icon">`;
    
    textFadeOut();
    backgroundChange(weatherInfo.mCon);
    unhide();
    textFadeIn();
    // newsCastSound.play();
  } catch (error) {
    APIerror();
  }
}

function backgroundColor(color) {
  body.style['background-color'] = color;
}



function backgroundChange(mainCondition) {
  console.log(weatherInfo.mCon)
  void body.offsetWidth;
  switch (mainCondition) {
    default:
      backgroundColor('gray');
      break;
    case 'Clear': 
      backgroundColor('paleturquoise');
      body.classList.add('fadeIn')
      break;
    case 'Clouds': 
      backgroundColor('lightslategrey');
      body.classList.add('fadeIn')
      break;
    case 'Snow': 
      backgroundColor('mintcream');
      body.classList.add('fadeIn')
      break;
    case 'Thunderstrom': 
      backgroundColor('midnightblue');
      body.classList.add('fadeIn')
      break;
    case 'Drizzle': 
      backgroundColor('steelblue');
      body.classList.add('fadeIn')
      break;
    case 'Rain': 
      backgroundColor('gray');
      body.classList.add('fadeIn')
      break;
  }
  setTimeout(body.classList.remove('fadeIn'), 3000)
}

function hide() {
  LC.style.visibility = 'hidden';
  TC.style.visibility = 'hidden';
  CC.style.visibility = 'hidden';
  popUp.style.visibility = 'hidden';
}

function APIerror() {
  popUp.style.visibility = 'visible';
  LC.style.visibility = 'hidden';
  TC.style.visibility = 'hidden';
  CC.style.visibility = 'hidden';
}

function popUpRemove() {
  console.log('go away')
  popUp.style.visibility = 'hidden';
}

function unhide() {
  LC.style.visibility = 'visible';
  TC.style.visibility = 'visible';
  CC.style.visibility = 'visible';
}

function geoSafari() {
  navigator.geolocation.getCurrentPosition(whereYouAt);
}

function whereYouAt(position) {
  const {
    latitude,
    longitude
  } = position.coords
  let API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
  getWeatherData(API)
}

function textFadeIn() {
  // trigger a DOM reflow
  void TC.offsetWidth;
  void LC.offsetWidth;
  void CC.offsetWidth;
  // add the animation class
  TC.classList.add('fadeIn');
  LC.classList.add('fadeIn');
  CC.classList.add('fadeIn');
}

function textFadeOut() {
  // trigger a DOM reflow
  void TC.offsetWidth;
  void LC.offsetWidth;
  void CC.offsetWidth;
  // add the animation class
  TC.classList.remove('fadeIn');
  LC.classList.remove('fadeIn');
  CC.classList.remove('fadeIn');
}
