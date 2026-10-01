import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Hero = styled.header`
  min-height: 360px;
  background: ${colors.softCream};
`

export const HeroContent = styled.div`
  min-height: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`

export const Brand = styled(Link)`
  text-decoration: none;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const CartLink = styled(Link)`
  position: absolute;
  top: 50px;
  right: 0;
  text-decoration: none;
  font-weight: 900;
`

export const HeroTitle = styled.h1`
  max-width: 620px;
  text-align: center;
  font-size: 36px;
`
