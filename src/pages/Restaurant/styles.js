import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const TopHeader = styled.header`
  min-height: 186px;
  background:
    radial-gradient(
        circle at 20px 20px,
        rgba(230, 103, 103, 0.08) 3px,
        transparent 4px
      )
      0 0 / 42px 42px,
    linear-gradient(135deg, #fff1e6, ${colors.softCream});
`

export const TopHeaderContent = styled.div`
  min-height: 186px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 24px 0;
  }
`

export const HeaderLink = styled(Link)`
  color: ${colors.salmon};
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
`

export const Brand = styled(Link)`
  color: ${colors.salmon};
  text-decoration: none;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const CartLink = styled(Link)`
  justify-self: end;
  color: ${colors.salmon};
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 680px) {
    justify-self: center;
  }
`

export const RestaurantHero = styled.section`
  height: 280px;
  position: relative;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url('${({ $image }) => $image}');
  background-position: center;
  background-size: cover;
`

export const RestaurantHeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 32px;
  color: ${colors.white};
`

export const Category = styled.span`
  font-size: 32px;
  font-weight: 300;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

export const PageMain = styled.main`
  min-height: 400px;
  padding-top: 56px;
`

export const MenuGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const Message = styled.div`
  width: min(600px, calc(100% - 32px));
  margin: 80px auto;
  padding: 32px;
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
  color: ${colors.salmon};
  text-align: center;
`
