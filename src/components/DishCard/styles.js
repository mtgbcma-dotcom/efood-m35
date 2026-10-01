import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.article`
  min-height: 420px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${colors.salmon};
  color: white;
`

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 18px;
`

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.4;
`

export const Button = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 10px;
  border: 0;
  background: ${colors.softCream};
  color: ${colors.salmon};
  font-weight: 700;
`
