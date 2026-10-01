import styled from 'styled-components'

export const Main = styled.main`
  min-height: 400px;
  padding-top: 70px;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Message = styled.p`
  text-align: center;
  font-size: 20px;
`
