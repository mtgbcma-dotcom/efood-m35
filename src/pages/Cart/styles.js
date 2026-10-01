import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const CartHeader = styled.header`
  min-height: 140px;
  background: ${colors.softCream};
`

export const CartHeaderContent = styled.div`
  min-height: 140px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-weight: 900;

  span {
    justify-self: end;
  }
`

export const Brand = styled(Link)`
  text-decoration: none;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const Main = styled.main`
  min-height: 460px;
  padding-top: 56px;
`

export const Title = styled.h1`
  margin-bottom: 32px;
`

export const EmptyCart = styled.section`
  padding: 40px;
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
  text-align: center;
`

export const EmptyLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 16px;
  background: ${colors.salmon};
  color: white;
  text-decoration: none;
`

export const CartList = styled.section`
  display: grid;
  gap: 16px;
`

export const CartItem = styled.article`
  display: grid;
  grid-template-columns: 160px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 16px;
  background: ${colors.salmon};
  color: white;
`

export const ProductImage = styled.img`
  width: 160px;
  height: 120px;
  object-fit: cover;
`

export const ProductInfo = styled.div``

export const ProductName = styled.h2`
  font-size: 20px;
`

export const ProductPrice = styled.p`
  margin-top: 10px;
`

export const QuantityArea = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 14px;
`

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 0;
`

export const QuantityValue = styled.span`
  min-width: 24px;
  text-align: center;
`

export const RemoveButton = styled.button`
  padding: 8px 14px;
  border: 0;
`

export const Summary = styled.section`
  margin-top: 32px;
  padding: 24px;
  border: 1px solid ${colors.salmon};
  background: white;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`

export const TotalValue = styled.strong`
  font-size: 24px;
`

export const CheckoutLink = styled(Link)`
  display: block;
  margin-top: 24px;
  padding: 12px 16px;
  background: ${colors.salmon};
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
`

export const ClearButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 16px;
  border: 1px solid ${colors.salmon};
  background: white;
  color: ${colors.salmon};
`
