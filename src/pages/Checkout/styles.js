import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Header = styled.header`
  min-height: 140px;
  background: ${colors.softCream};
`

export const HeaderContent = styled.div`
  min-height: 140px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-weight: 900;

  span {
    justify-self: end;
  }
`

export const Brand = styled(Link)`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -3px;
  text-decoration: none;
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const Main = styled.main`
  padding-top: 56px;
`

export const Title = styled.h1`
  margin-bottom: 32px;
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
  margin-bottom: 20px;
  font-size: 20px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  & + & {
    margin-top: 16px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  margin-top: 14px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 700;
`

export const Input = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 0 10px;
  border: 2px solid transparent;
  outline: 0;

  &:focus {
    border-color: ${colors.softCream};
  }
`

export const ErrorText = styled.p`
  padding: 12px;
  border: 1px solid ${colors.salmon};
  background: white;
  color: ${colors.salmon};
`

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid ${colors.salmon};
  background: white;
  font-size: 18px;
`

export const SubmitButton = styled.button`
  min-height: 44px;
  border: 0;
  background: ${colors.salmon};
  color: white;
  font-weight: 900;

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`
