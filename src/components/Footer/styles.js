import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const FooterArea = styled.footer`
  margin-top: 96px;
  background: ${colors.softCream};
`

export const FooterContent = styled.div`
  min-height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const FooterBrand = styled(Link)`
  color: ${colors.salmon};
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
  text-decoration: none;
`

export const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 30px;
`

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 4px;
  background: ${colors.salmon};
  color: ${colors.softCream};
  text-decoration: none;
  font-size: 14px;
  font-weight: 900;
`

export const Copyright = styled.p`
  max-width: 500px;
  margin-top: 78px;
  color: ${colors.salmon};
  font-size: 10px;
  line-height: 1.3;
  text-align: center;
`
