import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const FooterArea = styled.footer`
  margin-top: 80px;
  background: ${colors.softCream};
`

export const FooterContent = styled.div`
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FooterBrand = styled(Link)`
  text-decoration: none;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const FooterText = styled.p`
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
`
