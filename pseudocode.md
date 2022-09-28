```
install axios

HTML
  ref axios [X]
  ref main js [X]
  ref styles [X]
  ref bootstrap [X]

GLOBAL VARIABLES
 
body = html body element
APIKey = "key goes here"
countryCode = "country code here"
weatherData = WEATHEROBJECT{}
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
        add listener for click -> submit()
    Container3
      row1
        header for location
      row2
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
    Append all to body
    apply appropriate class to all
  
  Submit
    get ZIP value from input
    validate input
    push value to getData
    handleError
    
  getData
    https://api.openweathermap.org/data/2.5/weather?zip={USERINPUT},{country code}&appid={API key}
    get objects
    push to global variable
    populate state with values
  
  condition2Image
    EX: value includes 'raining' -> populate with rain image
  
  clearDOM
    set all states back to null
    reflow dom?
  
OBJECTS

  weatherInfo = {
    location - straight value
    kelvin - staight value
    farenheitt - ((Kelvin − 273.15) × 9/5) + 32
    celcius - Kelvin − 273.15
    condition - straight value
    image - condition2Image

FLOW

  initialize page with html elements
  visibility = hidden on (location, temps, condition, image)
  user inputs zip code
  zip is verified
   IF invalid return error
   ELSE continue
  input pushes zip value to the getData function
  getData runs and pushes the info to weatherData
  weatherData is used to populate weatherInfo
  condition2Image runs and applies appropriate image and styles to the page

```
