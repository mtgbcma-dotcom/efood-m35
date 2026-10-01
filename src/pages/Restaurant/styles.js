import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const TopHeader = styled.header`
  min-height: 186px;
  background: ${colors.softCream};
`

export const TopHeaderContent = styled.div`
  min-height: 186px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 24px 0;
    gap: 16px;
  }
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
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
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 680px) {
    justify-self: center;
  }
`

export const RestaurantHero = styled.section`
  height: 280px;
  background-image:
    linear-gradient(rgba(0,0,0,.56), rgba(0,0,0,.56)),
    url('${({ $image }) => $image}');
  background-size: cover;
  background-position: center;
`

export const RestaurantHeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 32px;
  color: white;
`

export const Category = styled.span`
  font-size: 32px;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
`

export const PageMain = styled.main`
  padding-top: 56px;
`

export const MenuGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const Message = styled.div`
  margin: 80px auto;
  text-align: center;
`
