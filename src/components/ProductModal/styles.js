import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.8);
`

export const Box = styled.div`
  width: min(900px, 100%);
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  padding: 32px;
  background: ${colors.salmon};
  color: white;
`

export const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  border: 0;
  background: transparent;
  color: white;
  font-size: 32px;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Content = styled.div``

export const Title = styled.h2`
  margin-bottom: 16px;
`

export const Description = styled.p`
  line-height: 1.5;
`

export const Portion = styled.p`
  margin-top: 16px;
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 12px;
  border: 0;
  background: ${colors.softCream};
  color: ${colors.salmon};
  font-weight: 700;
`
