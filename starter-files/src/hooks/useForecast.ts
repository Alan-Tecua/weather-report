import { ChangeEvent, useEffect, useState } from 'react'
import { optionType, forecastType } from '../types'

const useForecast = () => {
  const [term, setTerm] = useState<string>('')
  const [city, setCity] = useState<optionType | null>(null)
  const [options, setOptions] = useState<[]>([])
  const [forecast, setForecast] = useState<forecastType | null>(null)

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setOptions(data)) //console.log({ data }) --> check lat and lon are visible
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()
    setTerm(value)
    if (value === '') return
    getSearchOptions(value)
  }

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&untis=metric&appid=${process.env.REACT_APP_API_KEY}`
      // `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&untis=metric&appid=${process.env.REACT_APP_API_KEY}` --> gives the weather
    )
      .then((response) => response.json())
      // .then((data) => setForecast(data)) --> give all data
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        }
        setForecast(forecastData)
      })
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  }
  const onSubmit = () => {
    if (!city) return
    getForecast(city)
  }

  const onOptionSelect = (option: optionType) => {
    setCity(option)
    // console.log(option.name)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  }

  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
}

export default useForecast
