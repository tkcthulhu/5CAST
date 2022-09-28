const APIKey = 'ef757abcb72ab4e6058f4663f531b267';

// let weatherInfo = {
//     loc: ,;
//     K: ,;
//     F: ,;
//     C: ,;
//     con: ,;
//     img: ,;
// };

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
    createElement('headCol', 'div', 'container-fluid', 'headCol', null, body, '5CAST', 'HC');
    createElement('zipCol', 'div', 'container d-flex', 'zipCol', null, body, null, 'ZC');
    createElement('input', 'input', 'col-3', 'input', 'number', ZC, null, 'input');
    createElement('submit', 'button', 'col-3', 'goButton', null, ZC, 'Get your 5CAST!', 'goButton');
    createElement('loCol', 'div', 'container d-flex', 'locCol', null, body, null, 'LC');
    createElement('locRow1', 'div', 'row', 'locRow1', null, LC, 'LOCATION:', 'LR1');
    createElement('locRow2', 'div', 'row', 'locRow2', null, LC, null, 'LR2');
    createElement('loc', 'div', 'col', 'loc', null, LR2, null, 'loc');
    createElement('tempCol', 'div', 'container d-flex', 'tempCol', null, body, null, 'TC');
    createElement('tempRow1', 'div', 'row', 'tempRow1', null, TC, 'TEMPERATURE:', 'TR1');
    createElement('tempRow2', 'div', 'row', 'tempRow2', null, TC, null, 'TR2');
    createElement('tempK', 'div', 'temps col-3', 'tempK', null, TR2, null, 'tempK');
    createElement('tempF', 'div', 'temps col-3', 'tempF', null, TR2, null, 'tempF');
    createElement('tempC', 'div', 'temps col-3', 'tempC', null, TR2, null, 'tempC');
    createElement('conCol', 'div', 'container d-flex', 'conCol', null, body, null, 'CC');
    createElement('conRow1', 'div', 'row', 'conRow1', null, CC, 'CONDITION:', 'CR1');
    createElement('conRow2', 'div', 'row', 'conRow2', null, CC, null, 'CR2');
    createElement('condition', 'div', 'col', 'condition', null, CR2, null, 'condition');
    createElement('imgCol', 'div', 'container d-flex', 'imgCol', null, body, null, 'IC');
    createElement('image', 'div', 'col', 'image', null, IC, null, 'image');
}

createPage();

const userInput = input.value;
let API = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput}&appid=${APIKey}`;

async function getWeatherData(url) {
    try {
      const response = await axios.get(url);
      const userInput = input.value;
      info.innerText = response.data.results[userInput].name;
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
}

goButton.addEventListener('click', () => getWeatherData(API));