import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Card = styled.article`
  border: 1px solid ${colors.salmon};
  background: white;
`

export const ImageArea = styled.div`
  height: 220px;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  padding: 6px 8px;
  background: ${colors.salmon};
  color: white;
  font-size: 12px;
  font-weight: 700;
`

export const Content = styled.div`
  min-height: 220px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
`

export const Rating = styled.strong``

export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  line-height: 1.5;
`

export const Button = styled(Link)`
  width: fit-content;
  margin-top: auto;
  padding: 8px 12px;
  background: ${colors.salmon};
  color: white;
  text-decoration: none;
  font-weight: 700;
`
