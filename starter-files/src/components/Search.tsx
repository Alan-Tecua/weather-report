import { ChangeEvent } from 'react'
import { optionType } from '../types'

type Props = {
  term: string
  options: []
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}
const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
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

        <div className="relative flex mt-10 md:mt-4 text-zinc-900">
          <input
            type="text"
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-white "
            onChange={onInputChange}
          />

          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="rounded-r-md border-2
                   border-zinc-300
                   text-zinc-300
                   hover:border-teal-500
                   hover:text-teal-500
                     px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
