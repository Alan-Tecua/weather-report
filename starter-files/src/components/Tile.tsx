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
  return <div></div>
}

export default Tile
