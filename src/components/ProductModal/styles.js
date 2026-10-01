import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.82);
`

export const ModalBox = styled.div`
  width: min(1024px, 100%);
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  padding: 32px;
  background: ${colors.salmon};
  color: ${colors.white};

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  background: transparent;
  color: ${colors.white};
  font-size: 32px;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 100%;
    height: 220px;
  }
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ProductTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`

export const ProductDescription = styled.p`
  line-height: 1.55;
`

export const Portion = styled.p`
  margin-top: 16px;
`

export const AddButton = styled.button`
  margin-top: 16px;
  padding: 8px 10px;
  border: 0;
  background: ${colors.softCream};
  color: ${colors.salmon};
  font-weight: 700;
`
