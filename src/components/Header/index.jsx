import { useSelector } from 'react-redux'

import { selectCartCount } from '../../store/reducers/cart'
import {
  Brand,
  Hero,
  HeroContent,
  HeroTitle,
  CartLink
} from './styles'

const Header = () => {
  const cartCount = useSelector(selectCartCount)

  return (
    <Hero>
      <HeroContent className="container">
        <Brand to="/" aria-label="eFood - página inicial">
          efood
        </Brand>

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
