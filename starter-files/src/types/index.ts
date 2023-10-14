export type optionType = {
  name: string
  lat: number
  lon: number
}

// option: { name: string } == option: optionType --> to keep the code DRY, we put export option type and re use it where needed