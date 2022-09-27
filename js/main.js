const body = document.querySelector('body');
const APIKey = 'ef757abcb72ab4e6058f4663f531b267';

// let weatherInfo = {
//     loc: ,;
//     K: ,;
//     F: ,;
//     C: ,;
//     con: ,;
//     img: ,;
// };

function createElements() {
    headCol = document.createElement('div');
        headCol.className = 'container-fluid';
        headCol.id = 'headCol';
        body.appendChild(headCol);  
        HC = document.getElementById('headCol');
        HC.innerText = '5CAST'

    zipCol = document.createElement('div');
        zipCol.className = 'container d-flex';
        zipCol.id = 'zipCol';
        body.appendChild(zipCol);
        ZC = document.getElementById('zipCol');
            input = document.createElement('input');
                input.className = 'col-3';
                input.id = 'input';
                input.type = 'number';
                ZC.appendChild(input)
            submit = document.createElement('button');
                submit.innerText = 'Get Your 5CAST!';
                submit.className = 'col-3';
                ZC.appendChild(submit);

    locCol = document.createElement('div');
        locCol.className = 'container d-flex';
        locCol.id = 'locCol';
        body.appendChild(locCol);
        LC = document.getElementById('locCol');
            locRow1 = document.createElement('div');
                locRow1.innerText ='LOCATION:'
                locRow1.className = 'row-12 d-flex';
                locRow1.id = 'locRow1';
                LR1 = document.getElementById('locRow1');
                LC.appendChild(locRow1)
            locRow2 = document.createElement('div');
                locRow2.innerText ='info'
                locRow2.className = 'row-12 d-flex';
                locRow2.id = 'locRow2';
                LC.appendChild(locRow2);
                LR2 = document.getElementById('locRow2');
                    loc = document.createElement('div');
                        loc.id = 'loc';
                        LR2.appendChild(loc);

    tempCol = document.createElement('div');
        tempCol.className = 'container d-flex';
        tempCol.id = 'tempCol';
        body.appendChild(tempCol);
        TC = document.getElementById('tempCol');
            tempRow1 = document.createElement('div');
                tempRow1.innerText ='TEMPERATURE:'
                tempRow1.className = 'row-12 d-flex';
                tempRow1.id = 'tempRow1';
                TC.appendChild(tempRow1);
                TR1 = document.getElementById('tempRow1');
            tempRow2 = document.createElement('div');
                tempRow2.innerText ='info'
                tempRow2.className = 'row-12 d-flex';
                tempRow2.id = 'tempRow2';
                TC.appendChild(tempRow2);
                TR2 = document.getElementById('tempRow2');
                    tempK = document.createElement('div');
                    tempK.id = 'tempK';
                    TR2.appendChild(tempK);
                    tempF = document.createElement('div');
                    tempF.id = 'tempF';
                    TR2.appendChild(tempF);
                    tempC = document.createElement('div');
                    tempC.id = 'tempC';
                    TR2.appendChild(tempC);
    
    conCol = document.createElement('div');
        conCol.className = 'container d-flex';
        conCol.id = 'conCol';
        body.appendChild(conCol);
        CC = document.getElementById('conCol');
                conRow1 = document.createElement('div');
                    conRow1.innerText ='CONDITION:'
                    conRow1.className = 'row-12 d-flex';
                    conRow1.id = 'conRow1';
                    CC.appendChild(conRow1);
                    CR1 = document.getElementById('conRow1');
                conRow2 = document.createElement('div');
                    conRow2.innerText ='info'
                    conRow2.className = 'row-12 d-flex';
                    conRow2.id = 'conRow2';
                    CC.appendChild(conRow2);
                    CR2 = document.getElementById('conRow2');
                        condition = document.createElement('div');
                        condition.id = 'condtion'
                        CR2.appendChild(condition);
    
    imgCol = document.createElement('div');
        imgCol.className = 'container d-flex';
        imgCol.id = 'imgCol';
        body.appendChild(imgCol);
        IC = document.getElementById('imgCol');
            image = document.createElement('div');
            image.id = 'image';
            IC.appendChild(image);    
}

createElements();

let input = document.getElementById('input');
let loc = document.getElementById('loc');
let tempK = document.getElementById('tempK');
let tempF = document.getElementById('tempF');
let tempC = document.getElementById('tempC');
let condition = document.getElementById('condition');
let image = document.getElementById('image');
const userInput = input.value;
let API = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput}&appid=${APIKey}`;