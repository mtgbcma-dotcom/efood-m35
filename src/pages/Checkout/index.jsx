import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../../components/Footer'
import { checkoutOrder } from '../../services/api'
import {
  selectCartItems,
  selectCartTotal
} from '../../store/reducers/cart'

import {
  Header,
  HeaderContent,
  Brand,
  Main,
  Title,
  Empty,
  BackButton,
  Form,
  Section,
  SectionTitle,
  Grid,
  Field,
  Label,
  Input,
  Summary,
  ErrorText,
  SubmitButton
} from './styles'

const money = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const Checkout = () => {
  const navigate = useNavigate()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    receiver: '',
    description: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
    cardName: '',
    cardNumber: '',
    cardCode: '',
    cardMonth: '',
    cardYear: ''
  })

  const update = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value
    }))
  }

  const submit = async (event) => {
    event.preventDefault()

    if (items.length === 0) {
      setError('Seu carrinho está vazio.')
      return
    }

    setLoading(true)
    setError('')

    const products = items.flatMap((item) =>
      Array.from({ length: item.quantity }, () => ({
        id: item.id,
        price: item.preco
      }))
    )

    const payload = {
      products,
      delivery: {
        receiver: form.receiver,
        address: {
          description: form.description,
          city: form.city,
          zipCode: form.zipCode,
          number: Number(form.number),
          complement: form.complement
        }
      },
      payment: {
        card: {
          name: form.cardName,
          number: form.cardNumber.replace(/\s/g, ''),
          code: Number(form.cardCode),
          expires: {
            month: Number(form.cardMonth),
            year: Number(form.cardYear)
          }
        }
      }
    }

    try {
      const response = await checkoutOrder(payload)

      const confirmation = {
        response,
        delivery: payload.delivery,
        total
      }

      sessionStorage.setItem(
        'efood-order-confirmation',
        JSON.stringify(confirmation)
      )

      navigate('/confirmacao', {
        state: confirmation
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header>
        <HeaderContent className="container">
          <Link to="/carrinho">Voltar ao carrinho</Link>
          <Brand to="/">efood</Brand>
          <span>Entrega</span>
        </HeaderContent>
      </Header>

      <Main className="container">
        <Title>Entrega do pedido</Title>

        {items.length === 0 ? (
          <Empty>
            <p>Adicione produtos antes de concluir o pedido.</p>
            <BackButton to="/">
              Escolher restaurantes
            </BackButton>
          </Empty>
        ) : (
          <Form onSubmit={submit}>
            <Section>
              <SectionTitle>Dados de entrega</SectionTitle>

              <Field>
                <Label>Quem irá receber</Label>
                <Input
                  name="receiver"
                  value={form.receiver}
                  onChange={update}
                  required
                />
              </Field>

              <Field>
                <Label>Endereço</Label>
                <Input
                  name="description"
                  value={form.description}
                  onChange={update}
                  required
                />
              </Field>

              <Grid>
                <Field>
                  <Label>Cidade</Label>
                  <Input
                    name="city"
                    value={form.city}
                    onChange={update}
                    required
                  />
                </Field>

                <Field>
                  <Label>CEP</Label>
                  <Input
                    name="zipCode"
                    value={form.zipCode}
                    onChange={update}
                    required
                  />
                </Field>
              </Grid>

              <Grid>
                <Field>
                  <Label>Número</Label>
                  <Input
                    name="number"
                    type="number"
                    min="1"
                    value={form.number}
                    onChange={update}
                    required
                  />
                </Field>

                <Field>
                  <Label>Complemento</Label>
                  <Input
                    name="complement"
                    value={form.complement}
                    onChange={update}
                  />
                </Field>
              </Grid>
            </Section>

            <Section>
              <SectionTitle>Pagamento</SectionTitle>

              <Field>
                <Label>Nome no cartão</Label>
                <Input
                  name="cardName"
                  value={form.cardName}
                  onChange={update}
                  required
                />
              </Field>

              <Field>
                <Label>Número do cartão</Label>
                <Input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={update}
                  required
                />
              </Field>

              <Grid>
                <Field>
                  <Label>CVV</Label>
                  <Input
                    name="cardCode"
                    value={form.cardCode}
                    onChange={update}
                    required
                  />
                </Field>

                <Field>
                  <Label>Mês</Label>
                  <Input
                    name="cardMonth"
                    type="number"
                    min="1"
                    max="12"
                    value={form.cardMonth}
                    onChange={update}
                    required
                  />
                </Field>

                <Field>
                  <Label>Ano</Label>
                  <Input
                    name="cardYear"
                    type="number"
                    min="2026"
                    value={form.cardYear}
                    onChange={update}
                    required
                  />
                </Field>
              </Grid>
            </Section>

            <Summary>
              Valor do pedido: <strong>{money(total)}</strong>
            </Summary>

            {error && <ErrorText>{error}</ErrorText>}

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Concluir pedido'}
            </SubmitButton>
          </Form>
        )}
      </Main>

      <Footer />
    </>
  )
}

export default Checkout
