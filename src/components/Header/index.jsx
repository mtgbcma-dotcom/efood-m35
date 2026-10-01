import { useSelector } from 'react-redux'

import { selectCartCount } from '../../store/reducers/cart'
import {
  Hero,
  HeroContent,
  Brand,
  CartLink,
  HeroTitle
} from './styles'

const Header = () => {
  const cartCount = useSelector(selectCartCount)

  return (
    <Hero>
      <HeroContent className="container">
        <Brand to="/">efood</Brand>

        <CartLink to="/carrinho">
          Carrinho ({cartCount})
        </CartLink>

        <HeroTitle>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </HeroTitle>
      </HeroContent>
    </Hero>
  )
}

export default Header
