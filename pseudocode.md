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
  
  Create function to do all of that ^

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
  
  create function to hide and unhide elements

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
  profit??


IDEAS

  geolocation
    
    After createPage request location data from user
    
    IF user allows location, load page with weather data already populated
      gather lat/long from geo API object
      call weather API 
      get values and set equal to variables
      unhide elements
    
    ELSE not load page ready for input


  image changy thing
    if condition contains clouds show cloud background ect.

  thermometer
    draw a thermometer
    fill to % based on temperature (in f)

  icons

    ICON REF
      01d = clear day
      01n = clear night
      03d = scattered clouds
      04d = broken clouds
      09d = shower rain
      10d = rain day
      10n = rain night
      11d = thunderstorm
      13d = snow
      50d = mist

    ICON = API -> weather -> icon
    set object value for icon (null)
    pull on API request and concatenate API image value to file path
  
```
