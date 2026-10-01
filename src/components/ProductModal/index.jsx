import { useEffect } from 'react'

import {
  Overlay,
  Box,
  Close,
  Image,
  Content,
  Title,
  Description,
  Portion,
  Button
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const ProductModal = ({ dish, onClose, onAdd }) => {
  useEffect(() => {
    if (!dish) return

    document.body.classList.add('modal-open')

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [dish])

  if (!dish) return null

  return (
    <Overlay
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <Box>
        <Close type="button" onClick={onClose}>
          ×
        </Close>

        <Image src={dish.foto} alt={dish.nome} />

        <Content>
          <Title>{dish.nome}</Title>
          <Description>{dish.descricao}</Description>
          <Portion>Serve: {dish.porcao}</Portion>

          <Button type="button" onClick={() => onAdd(dish)}>
            Adicionar ao carrinho - {formatPrice(dish.preco)}
          </Button>
        </Content>
      </Box>
    </Overlay>
  )
}

export default ProductModal
