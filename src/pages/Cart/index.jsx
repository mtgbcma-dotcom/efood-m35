import { useDispatch, useSelector } from 'react-redux'

import Footer from '../../components/Footer'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal
} from '../../store/reducers/cart'

import {
  Header,
  HeaderContent,
  BackLink,
  Brand,
  Main,
  Title,
  Empty,
  EmptyLink,
  List,
  Item,
  Image,
  Info,
  Name,
  Price,
  Quantity,
  QuantityButton,
  RemoveButton,
  Summary,
  Total,
  CheckoutLink
} from './styles'

const money = (value) =>
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
      <Header>
        <HeaderContent className="container">
          <BackLink to="/">Restaurantes</BackLink>
          <Brand to="/">efood</Brand>
          <span>Carrinho</span>
        </HeaderContent>
      </Header>

      <Main className="container">
        <Title>Seu carrinho</Title>

        {items.length === 0 ? (
          <Empty>
            <p>Seu carrinho está vazio.</p>
            <EmptyLink to="/">Escolher restaurantes</EmptyLink>
          </Empty>
        ) : (
          <>
            <List>
              {items.map((item) => (
                <Item key={item.id}>
                  <Image src={item.foto} alt={item.nome} />

                  <Info>
                    <Name>{item.nome}</Name>
                    <Price>{money(item.preco)}</Price>

                    <Quantity>
                      <QuantityButton
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        −
                      </QuantityButton>

                      <strong>{item.quantity}</strong>

                      <QuantityButton
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </QuantityButton>
                    </Quantity>
                  </Info>

                  <RemoveButton
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Remover
                  </RemoveButton>
                </Item>
              ))}
            </List>

            <Summary>
              <Total>
                <span>Valor total</span>
                <strong>{money(total)}</strong>
              </Total>

              <CheckoutLink to="/checkout">
                Continuar para entrega
              </CheckoutLink>
            </Summary>
          </>
        )}
      </Main>

      <Footer />
    </>
  )
}

export default Cart
