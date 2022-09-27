```
HTML elements needed
  Title
  Container1
    input for zip
    submit button
  Container2
    header for location
    location info
  Container3
    row1
      header for temperature
    row2
      kelvin
      farenheitt
      celcius
  Container4
    row1
      header for condition
    row2
      condition info
  Container5
    dynamic images

JAVASCRIPT
  
  INIT
  
  body = html body element
  APIKey = "key goes here"
   init function  
     create elements
      header/assign id
      zip input/assign id
      submit button/assign id
     appened to body
  
  FUNCTIONS
    
    createElements
    Title
  Container1
    input for zip
    submit button
  Container2
    header for location
    location info
  Container3
    row1
      header for temperature
    row2
      kelvin
      farenheitt
      celcius
  Container4
    row1
      header for condition
    row2
      condition info
  Container5
    dynamic images
    
    buttonClick
      get ZIP from input
      validate input
      push value to getData
      handleError
      
    getData
      get objects
      populate state with values
      
    tempCOnvert
    
    condition2Image
    
    clearDOM
    
  OBJECT
    state = {
      location
      temperature
       kelvin
       farenheitt
       celcius
      condition
```
