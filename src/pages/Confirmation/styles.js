import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Header = styled.header`
  min-height: 140px;
  background: ${colors.softCream};
`

export const HeaderContent = styled.div`
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Brand = styled(Link)`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
  text-decoration: none;
`

export const Main = styled.main`
  min-height: 480px;
  padding-top: 64px;
`

export const ConfirmationCard = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid ${colors.salmon};
  background: white;
  text-align: center;
`

export const SuccessMark = styled.div`
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: ${colors.success};
  color: white;
  font-size: 34px;
  font-weight: 900;
`

export const Title = styled.h1`
  font-size: 28px;
`

export const OrderNumber = styled.h2`
  margin-top: 16px;
  font-size: 22px;
`

export const Text = styled.p`
  margin-top: 18px;
  line-height: 1.6;
  color: ${colors.muted};
`

export const InfoBox = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 28px;
  padding: 20px;
  background: ${colors.softCream};
  text-align: left;
  line-height: 1.5;
`

export const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 28px;
  padding: 12px 18px;
  background: ${colors.salmon};
  color: white;
  text-decoration: none;
  font-weight: 900;
`
