import { ChangeEvent, useState } from 'react'

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
    console.log(term)

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    )
  }

  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

  return (
    <main className="flex justify-center items-center bg-zinc-900	h-[100vh] w-full">
      <section
        className="w-full md:max-w-[500px] p-4 flex flex-col text-center
        items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-stone-100"
      >
        <h1 className="text-4x1 font-thin">
          Mallow's <span className=" font-black ">Weather Report</span>
        </h1>
        <p className="text-sm mt-3">Where shall we check?</p>

        <div className="flex mt-10 md:mt-4 text-zinc-900">
          <input
            type="text"
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-white "
            onChange={onInputChange}
          />
          <button
            className="rounded-r-md border-2
                   border-zinc-300
                   text-zinc-300
                   hover:border-teal-500
                   hover:text-teal-500
                     px-2 py-1 cursor-pointer"
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
