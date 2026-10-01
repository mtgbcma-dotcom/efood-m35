import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const Card = styled.article`
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
`

export const ImageArea = styled.div`
  height: 217px;
  position: relative;
  overflow: hidden;
`

export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Tag = styled.span`
  padding: 6px 8px;
  background: ${colors.salmon};
  color: ${colors.softCream};
  font-size: 12px;
  font-weight: 700;
`

export const Content = styled.div`
  min-height: 210px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
`

export const Star = styled.span`
  color: #ffb800;
  font-size: 20px;
`

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 1.55;
`

export const DetailsButton = styled(Link)`
  width: fit-content;
  margin-top: auto;
  padding: 7px 10px;
  background: ${colors.salmon};
  color: ${colors.softCream};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`
