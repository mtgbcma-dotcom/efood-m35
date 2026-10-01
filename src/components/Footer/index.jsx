import {
  FooterArea,
  FooterContent,
  FooterBrand,
  Socials,
  SocialLink,
  Copyright
} from './styles'

const Footer = () => (
  <FooterArea>
    <FooterContent className="container">
      <FooterBrand to="/">efood</FooterBrand>

      <Socials aria-label="Redes sociais">
        <SocialLink href="#" aria-label="Instagram">◎</SocialLink>
        <SocialLink href="#" aria-label="Facebook">f</SocialLink>
        <SocialLink href="#" aria-label="Twitter">♥</SocialLink>
      </Socials>

      <Copyright>
        A eFood é uma plataforma para divulgação de estabelecimentos.
        A responsabilidade pela entrega e qualidade dos produtos é dos
        restaurantes.
      </Copyright>
    </FooterContent>
  </FooterArea>
)

export default Footer
