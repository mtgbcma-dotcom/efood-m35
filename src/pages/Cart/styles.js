import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Header = styled.header`
  background: ${colors.softCream};
`

export const HeaderContent = styled.div`
  min-height: 140px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-weight: 900;

  span {
    justify-self: end;
  }
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const Brand = styled(Link)`
  text-decoration: none;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const Main = styled.main`
  min-height: 500px;
  padding-top: 50px;
`

export const Title = styled.h1`
  margin-bottom: 28px;
`

export const Empty = styled.section`
  padding: 40px;
  border: 1px solid ${colors.salmon};
  background: white;
  text-align: center;
`

export const EmptyLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 14px;
  background: ${colors.salmon};
  color: white;
  text-decoration: none;
`

export const List = styled.div`
  display: grid;
  gap: 16px;
`

export const Item = styled.article`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 16px;
  background: ${colors.salmon};
  color: white;
`

export const Image = styled.img`
  width: 150px;
  height: 110px;
  object-fit: cover;
`

export const Info = styled.div``

export const Name = styled.h2`
  font-size: 20px;
`

export const Price = styled.p`
  margin-top: 8px;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
`

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 0;
`

export const RemoveButton = styled.button`
  padding: 10px 14px;
  border: 0;
`

export const Summary = styled.section`
  margin-top: 28px;
  padding: 22px;
  border: 1px solid ${colors.salmon};
  background: white;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`

export const CheckoutLink = styled(Link)`
  display: block;
  margin-top: 20px;
  padding: 12px;
  background: ${colors.salmon};
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 900;
`
