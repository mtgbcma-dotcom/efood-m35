import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Header = styled.header`
  background: ${colors.softCream};
`

export const HeaderContent = styled.div`
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`

export const BackLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
`

export const Brand = styled(Link)`
  text-decoration: none;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const CartLink = styled(Link)`
  justify-self: end;
  text-decoration: none;
  font-weight: 900;
`

export const Hero = styled.section`
  height: 280px;
  background:
    linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)),
    url('${({ $image }) => $image}') center / cover;
`

export const HeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 30px;
  color: white;
`

export const Category = styled.span`
  font-size: 30px;
`

export const Name = styled.h1`
  font-size: 32px;
`

export const Main = styled.main`
  padding-top: 56px;
`

export const Menu = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const Message = styled.p`
  margin: 80px;
  text-align: center;
`
