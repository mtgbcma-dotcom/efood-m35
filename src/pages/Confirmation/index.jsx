import { Navigate, useLocation } from 'react-router-dom'

import Footer from '../../components/Footer'

import {
  Header,
  HeaderContent,
  Brand,
  Main,
  ConfirmationCard,
  SuccessMark,
  Title,
  OrderNumber,
  Text,
  InfoBox,
  HomeLink
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const getOrderId = (response) =>
  response?.orderId ??
  response?.orderID ??
  response?.order_id ??
  response?.id ??
  response?.pedidoId ??
  'confirmado'

const Confirmation = () => {
  const location = useLocation()
  const state = location.state

  if (!state?.response) {
    return <Navigate to="/" replace />
  }

  const orderId = getOrderId(state.response)

  return (
    <>
      <Header>
        <HeaderContent className="container">
          <Brand to="/">efood</Brand>
        </HeaderContent>
      </Header>

      <Main className="container">
        <ConfirmationCard>
          <SuccessMark>✓</SuccessMark>

          <Title>Pedido realizado com sucesso!</Title>

          <OrderNumber>
            Pedido nº {String(orderId)}
          </OrderNumber>

          <Text>
            Obrigado pela preferência. Assim que o pedido estiver pronto,
            ele seguirá para o endereço informado.
          </Text>

          <InfoBox>
            <p>
              <strong>Recebedor:</strong>{' '}
              {state.delivery?.receiver}
            </p>

            <p>
              <strong>Entrega:</strong>{' '}
              {state.delivery?.address?.description},{' '}
              {state.delivery?.address?.number} -{' '}
              {state.delivery?.address?.city}
            </p>

            <p>
              <strong>Valor:</strong>{' '}
              {formatPrice(state.total)}
            </p>

            <p>
              <strong>Resposta da API:</strong>{' '}
              {state.response?.orderId
                ? `orderId: ${state.response.orderId}`
                : JSON.stringify(state.response)}
            </p>
          </InfoBox>

          <HomeLink to="/">
            Voltar para restaurantes
          </HomeLink>
        </ConfirmationCard>
      </Main>

      <Footer />
    </>
  )
}

export default Confirmation
