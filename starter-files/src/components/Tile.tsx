import Feels from './Icons/Feels'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'
import Humidity from './Icons/Humidity'

type Props = {
  icon: 'wind' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon]
  return (
    <article className="w-[140px] h-[130px] bg-zinc-900/20 backdrop-blur-lg text-xs font-bold items-center rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <Icon />
        <h4>{title}</h4>
      </div>
      <h3 className="text-lg">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </article>
  )
}

export default Tile
