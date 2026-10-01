import { Navigate,useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import { getRestaurantById } from '../../data/restaurants'
import { TopHeader,TopHeaderContent,HeaderLink,Brand,CartText,RestaurantHero,RestaurantHeroContent,Category,RestaurantName,MenuGrid,PageMain } from './styles'
export default function Restaurant(){const {id}=useParams();const restaurant=getRestaurantById(id);if(!restaurant)return <Navigate to="/" replace/>;return <><TopHeader><TopHeaderContent className="container"><HeaderLink to="/">Restaurantes</HeaderLink><Brand to="/">efood</Brand><CartText>0 produto(s) no carrinho</CartText></TopHeaderContent></TopHeader><RestaurantHero $image={restaurant.imagem}><RestaurantHeroContent className="container"><Category>{restaurant.tipo}</Category><RestaurantName>{restaurant.nome}</RestaurantName></RestaurantHeroContent></RestaurantHero><PageMain><MenuGrid className="container">{restaurant.menu.map((dish)=><MenuCard key={dish.id} dish={dish}/>)}</MenuGrid></PageMain><Footer/></>}
