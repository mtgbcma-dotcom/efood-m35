import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Footer from '../../components/Footer'
import { clearCart } from '../../store/reducers/cart'

import {
  Header,
  HeaderContent,
  Brand,
  Main,
  Card,
  Success,
  Title,
  Order,
  Text,
  Info,
  HomeButton
} from './styles'

const money = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value || 0)

const Confirmation = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const confirmation = useMemo(() => {
    if (location.state?.response) {
      return location.state
    }

    try {
      const stored = sessionStorage.getItem(
        'efood-order-confirmation'
      )

      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  }, [location.state])

  useEffect(() => {
    if (confirmation?.response) {
      dispatch(clearCart())
    }
  }, [confirmation, dispatch])

  if (!confirmation?.response) {
    return (
      <>
        <Header>
          <HeaderContent className="container">
            <Brand to="/">efood</Brand>
          </HeaderContent>
        </Header>

        <Main className="container">
          <Card>
            <Title>Nenhum pedido confirmado.</Title>
            <HomeButton to="/">
              Voltar para restaurantes
            </HomeButton>
          </Card>
        </Main>

        <Footer />
      </>
    )
  }

  const {
    response,
    delivery,
    total
  } = confirmation

  const orderId =
    response?.orderId ??
    response?.orderID ??
    response?.id ??
    response?.pedidoId ??
    'confirmado'

  return (
    <>
      <Header>
        <HeaderContent className="container">
          <Brand to="/">efood</Brand>
        </HeaderContent>
      </Header>

      <Main className="container">
        <Card>
          <Success>✓</Success>

          <Title>Pedido realizado com sucesso!</Title>

          <Order>Pedido nº {String(orderId)}</Order>

          <Text>
            Obrigado pela preferência. Seu pedido foi recebido
            pela API e está confirmado.
          </Text>

          <Info>
            <p>
              <strong>Recebedor:</strong>{' '}
              {delivery?.receiver}
            </p>

            <p>
              <strong>Endereço:</strong>{' '}
              {delivery?.address?.description},{' '}
              {delivery?.address?.number} -{' '}
              {delivery?.address?.city}
            </p>

            <p>
              <strong>Valor:</strong> {money(total)}
            </p>

            <p>
              <strong>Resposta da API:</strong>{' '}
              {JSON.stringify(response)}
            </p>
          </Info>

          <HomeButton to="/">
            Voltar para restaurantes
          </HomeButton>
        </Card>
      </Main>

      <Footer />
    </>
  )
}

export default Confirmation
