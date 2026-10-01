import { useEffect } from 'react'
import {
  Overlay,
  ModalBox,
  CloseButton,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductDescription,
  Portion,
  AddButton
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const ProductModal = ({ dish, onClose, onAdd }) => {
  useEffect(() => {
    if (!dish) return undefined

    document.body.classList.add('modal-open')

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [dish, onClose])

  if (!dish) return null

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <ModalBox>
        <CloseButton type="button" onClick={onClose}>×</CloseButton>
        <ProductImage src={dish.foto} alt={dish.nome} />

        <ProductContent>
          <ProductTitle>{dish.nome}</ProductTitle>
          <ProductDescription>{dish.descricao}</ProductDescription>
          <Portion>Serve: {dish.porcao}</Portion>

          <AddButton type="button" onClick={() => onAdd(dish)}>
            Adicionar ao carrinho - {formatPrice(dish.preco)}
          </AddButton>
        </ProductContent>
      </ModalBox>
    </Overlay>
  )
}

export default ProductModal
