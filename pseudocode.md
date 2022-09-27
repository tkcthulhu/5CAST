```
install axios

HTML
  ref axios
  ref main js
  ref styles
  ref bootstrap

GLOBAL VARIABLES
 
body = html body element
APIKey = "key goes here"
location = element by id
tempK = element by id
tempF = element by id
tempC = element by id
condition = element by id


FUNCTIONS
  
  createElements
    Container1 - fluid - text to left
      Title
    Container2 
      input for zip
      submit button
    Container3
      header for location
      location info
    Container4
      row1
        header for temperature
      row2
        kelvin
        farenheitt
        celcius
    Container5
      row1
        header for condition
      row2
        condition info
    Container6
      dynamic images
  
  buttonClick
    get ZIP value from input
    validate input
    push value to getData
    handleError
    
  getData
    get objects
    populate state with values
  
  condition2Image
    EX: value includes 'raining' -> populate with rain image
  
  clearDOM
    set all states back to null
    reflow dom?
  
OBJECTS

  state = {
    location - straight value
    kelvin - staight value
    farenheitt - ((Kelvin − 273.15) × 9/5) + 32
    celcius - Kelvin − 273.15
    condition - straight value
    image - condition2Image

FLOW
```
