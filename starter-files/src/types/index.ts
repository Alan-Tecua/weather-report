import { NumberLiteralType } from 'typescript'

export type optionType = {
  name: string
  lat: number
  lon: number
}

// option: { name: string } == option: optionType --> to keep the code DRY, we put export option type and re use it where needed

export type forecastType = {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        speed: number
        gust: number
        deg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}
