import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

import Footer from '../../components/Footer'
import { createOrder } from '../../services/api'
import {
  clearCart,
  selectCartItems,
  selectCartTotal
} from '../../store/reducers/cart'

import {
  Header,
  HeaderContent,
  Brand,
  BackLink,
  Main,
  Title,
  Form,
  Section,
  SectionTitle,
  Grid,
  Field,
  Label,
  Input,
  ErrorText,
  Summary,
  SubmitButton
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

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

  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (items.length === 0) {
    return <Navigate to="/carrinho" replace />
  }

  const updateField = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value
    }))
  }

  const buildProducts = () =>
    items.flatMap((item) =>
      Array.from({ length: item.quantity }, () => ({
        id: item.id,
        price: item.preco
      }))
    )

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setSubmitting(true)
      setError('')

      const payload = {
        products: buildProducts(),
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

      const response = await createOrder(payload)

      dispatch(clearCart())

      navigate('/confirmacao', {
        state: {
          response,
          delivery: payload.delivery,
          total
        }
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Header>
        <HeaderContent className="container">
          <BackLink to="/carrinho">Voltar ao carrinho</BackLink>
          <Brand to="/">efood</Brand>
          <span>Entrega</span>
        </HeaderContent>
      </Header>

      <Main className="container">
        <Title>Entrega do pedido</Title>

        <Form onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>Dados de entrega</SectionTitle>

            <Field>
              <Label htmlFor="receiver">Quem irá receber</Label>
              <Input
                id="receiver"
                name="receiver"
                value={form.receiver}
                onChange={updateField}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="description">Endereço</Label>
              <Input
                id="description"
                name="description"
                value={form.description}
                onChange={updateField}
                placeholder="Rua / Avenida"
                required
              />
            </Field>

            <Grid>
              <Field>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={updateField}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="zipCode">CEP</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={updateField}
                  required
                />
              </Field>
            </Grid>

            <Grid>
              <Field>
                <Label htmlFor="number">Número</Label>
                <Input
                  id="number"
                  name="number"
                  type="number"
                  min="1"
                  value={form.number}
                  onChange={updateField}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="complement">Complemento</Label>
                <Input
                  id="complement"
                  name="complement"
                  value={form.complement}
                  onChange={updateField}
                />
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>Pagamento</SectionTitle>

            <Field>
              <Label htmlFor="cardName">Nome no cartão</Label>
              <Input
                id="cardName"
                name="cardName"
                value={form.cardName}
                onChange={updateField}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="cardNumber">Número do cartão</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                inputMode="numeric"
                value={form.cardNumber}
                onChange={updateField}
                required
              />
            </Field>

            <Grid>
              <Field>
                <Label htmlFor="cardCode">CVV</Label>
                <Input
                  id="cardCode"
                  name="cardCode"
                  inputMode="numeric"
                  maxLength="4"
                  value={form.cardCode}
                  onChange={updateField}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="cardMonth">Mês</Label>
                <Input
                  id="cardMonth"
                  name="cardMonth"
                  type="number"
                  min="1"
                  max="12"
                  value={form.cardMonth}
                  onChange={updateField}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="cardYear">Ano</Label>
                <Input
                  id="cardYear"
                  name="cardYear"
                  type="number"
                  min="2026"
                  value={form.cardYear}
                  onChange={updateField}
                  required
                />
              </Field>
            </Grid>
          </Section>

          <Summary>
            Valor do pedido: <strong>{formatPrice(total)}</strong>
          </Summary>

          {error && <ErrorText>{error}</ErrorText>}

          <SubmitButton type="submit" disabled={submitting}>
            {submitting ? 'Enviando pedido...' : 'Concluir pedido'}
          </SubmitButton>
        </Form>
      </Main>

      <Footer />
    </>
  )
}

export default Checkout
