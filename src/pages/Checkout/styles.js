import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Header = styled.header`
  background: ${colors.softCream};
`

export const HeaderContent = styled.div`
  min-height: 140px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-weight: 900;

  a {
    text-decoration: none;
  }

  span {
    justify-self: end;
  }
`

export const Brand = styled(Link)`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
`

export const Main = styled.main`
  min-height: 500px;
  padding-top: 50px;
`

export const Title = styled.h1`
  margin-bottom: 28px;
`

export const Empty = styled.section`
  padding: 40px;
  border: 1px solid ${colors.salmon};
  background: white;
  text-align: center;
`

export const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 14px;
  background: ${colors.salmon};
  color: white;
  text-decoration: none;
`

export const Form = styled.form`
  display: grid;
  gap: 24px;
`

export const Section = styled.section`
  padding: 24px;
  background: ${colors.salmon};
  color: white;
`

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  margin-top: 14px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 700;
`

export const Input = styled.input`
  width: 100%;
  min-height: 42px;
  padding: 0 10px;
  border: 0;
`

export const Summary = styled.div`
  padding: 20px;
  border: 1px solid ${colors.salmon};
  background: white;
  font-size: 18px;
`

export const ErrorText = styled.p`
  padding: 14px;
  border: 1px solid ${colors.salmon};
  background: white;
`

export const SubmitButton = styled.button`
  min-height: 46px;
  border: 0;
  background: ${colors.salmon};
  color: white;
  font-weight: 900;
`
