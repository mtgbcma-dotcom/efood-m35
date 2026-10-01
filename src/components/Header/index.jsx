import { Brand, Hero, HeroContent, HeroTitle } from './styles'

const Header = () => (
  <Hero>
    <HeroContent className="container">
      <Brand to="/" aria-label="eFood - página inicial">
        efood
      </Brand>

      <HeroTitle>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </HeroTitle>
    </HeroContent>
  </Hero>
)

export default Header
