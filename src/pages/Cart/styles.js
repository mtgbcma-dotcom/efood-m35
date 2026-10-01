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
  gap: 20px;
  font-size: 18px;
  font-weight: 900;

  span {
    justify-self: end;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 20px 0;

    span {
      justify-self: center;
    }
  }
`

export const Brand = styled(Link)`
  color: ${colors.salmon};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
  text-decoration: none;
`

export const BackLink = styled(Link)`
  color: ${colors.salmon};
  text-decoration: none;
`

export const Main = styled.main`
  min-height: 460px;
  padding-top: 56px;
`

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 32px;
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
  color: ${colors.white};
  text-decoration: none;
  font-weight: 700;
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
  color: ${colors.white};

  @media (max-width: 700px) {
    grid-template-columns: 100px 1fr;

    button:last-child {
      grid-column: 1 / -1;
    }
  }
`

export const ProductImage = styled.img`
  width: 160px;
  height: 120px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
  }
`

export const ProductInfo = styled.div`
  min-width: 0;
`

export const ProductName = styled.h2`
  font-size: 20px;
`

export const ProductPrice = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
`

export const QuantityArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
`

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 0;
  background: ${colors.softCream};
  color: ${colors.salmon};
  font-size: 20px;
  font-weight: 900;
`

export const QuantityValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 900;
`

export const RemoveButton = styled.button`
  min-height: 36px;
  padding: 0 14px;
  border: 0;
  background: ${colors.softCream};
  color: ${colors.salmon};
  font-weight: 700;
`

export const Summary = styled.section`
  margin-top: 32px;
  padding: 24px;
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
`

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
`

export const TotalValue = styled.strong`
  font-size: 24px;
`

export const ClearButton = styled.button`
  margin-top: 24px;
  padding: 10px 16px;
  border: 0;
  background: ${colors.salmon};
  color: ${colors.white};
  font-weight: 700;
`
