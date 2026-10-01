import {
  FooterArea,
  FooterContent,
  FooterBrand,
  FooterText
} from './styles'

const Footer = () => (
  <FooterArea>
    <FooterContent className="container">
      <FooterBrand to="/">efood</FooterBrand>

      <FooterText>
        A eFood é uma plataforma para divulgação de estabelecimentos.
      </FooterText>
    </FooterContent>
  </FooterArea>
)

export default Footer
