import { useDispatch, useSelector } from 'react-redux'

import Footer from '../../components/Footer'
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from '../../store/reducers/cart'

import {
  CartHeader,
  CartHeaderContent,
  Brand,
  BackLink,
  Main,
  Title,
  EmptyCart,
  EmptyLink,
  CartList,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityArea,
  QuantityButton,
  QuantityValue,
  RemoveButton,
  Summary,
  SummaryRow,
  TotalValue,
  ClearButton
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <>
      <CartHeader>
        <CartHeaderContent className="container">
          <BackLink to="/">Restaurantes</BackLink>
          <Brand to="/">efood</Brand>
          <span>Carrinho</span>
        </CartHeaderContent>
      </CartHeader>

      <Main className="container">
        <Title>Seu carrinho</Title>

        {items.length === 0 ? (
          <EmptyCart>
            <p>Seu carrinho está vazio.</p>
            <EmptyLink to="/">
              Escolher restaurantes
            </EmptyLink>
          </EmptyCart>
        ) : (
          <>
            <CartList>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <ProductImage src={item.foto} alt={item.nome} />

                  <ProductInfo>
                    <ProductName>{item.nome}</ProductName>

                    <ProductPrice>
                      {formatPrice(item.preco)}
                    </ProductPrice>

                    <QuantityArea>
                      <QuantityButton
                        type="button"
                        aria-label={`Diminuir quantidade de ${item.nome}`}
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        −
                      </QuantityButton>

                      <QuantityValue>{item.quantity}</QuantityValue>

                      <QuantityButton
                        type="button"
                        aria-label={`Aumentar quantidade de ${item.nome}`}
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </QuantityButton>
                    </QuantityArea>
                  </ProductInfo>

                  <RemoveButton
                    type="button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Remover
                  </RemoveButton>
                </CartItem>
              ))}
            </CartList>

            <Summary>
              <SummaryRow>
                <strong>Valor total</strong>
                <TotalValue>{formatPrice(total)}</TotalValue>
              </SummaryRow>

              <ClearButton
                type="button"
                onClick={() => dispatch(clearCart())}
              >
                Limpar carrinho
              </ClearButton>
            </Summary>
          </>
        )}
      </Main>

      <Footer />
    </>
  )
}

export default Cart
