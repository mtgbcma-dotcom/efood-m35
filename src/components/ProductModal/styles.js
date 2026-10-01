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
    max-height: 90vh;
    overflow-y: auto;
    grid-template-columns: 1fr;
    padding: 24px;
  }
`

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  background: transparent;
  color: ${colors.white};
  font-size: 32px;
  line-height: 1;
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
  font-weight: 900;
`

export const ProductDescription = styled.p`
  max-width: 650px;
  font-size: 14px;
  line-height: 1.55;
`

export const Portion = styled.p`
  margin-top: 16px;
  font-size: 14px;
`

export const AddButton = styled.button`
  min-height: 32px;
  margin-top: 16px;
  padding: 0 10px;
  border: 0;
  background: ${colors.softCream};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
`
