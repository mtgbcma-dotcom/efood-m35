import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const Hero = styled.header`
  min-height: 384px;
  background:
    radial-gradient(
        circle at 20px 20px,
        rgba(230, 103, 103, 0.08) 3px,
        transparent 4px
      )
      0 0 / 42px 42px,
    linear-gradient(135deg, #fff1e6, ${colors.softCream});
`

export const HeroContent = styled.div`
  min-height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const Brand = styled(Link)`
  color: ${colors.salmon};
  font-size: 42px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -3px;
  text-decoration: none;
`

export const HeroTitle = styled.h1`
  max-width: 560px;
  color: ${colors.salmon};
  font-size: 36px;
  line-height: 1.15;
  text-align: center;
  font-weight: 900;

  @media (max-width: 600px) {
    font-size: 29px;
  }
`
