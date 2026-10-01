import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { restaurants } from '../../data/restaurants'
import { RestaurantsGrid,Main } from './styles'
export default function Home(){return <><Header/><Main><RestaurantsGrid className="container">{restaurants.map((restaurant)=><RestaurantCard key={restaurant.id} restaurant={restaurant}/>)}</RestaurantsGrid></Main><Footer/></>}
