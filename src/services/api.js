export const RESTAURANTS_URL =
  'https://api-ebac.vercel.app/api/efood/restaurantes'

export const CHECKOUT_URL =
  'https://api-ebac.vercel.app/api/efood/checkout'

export async function getRestaurants() {
  const response = await fetch(RESTAURANTS_URL)

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  return response.json()
}

export async function checkoutOrder(payload) {
  const response = await fetch(CHECKOUT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message =
      result?.message ||
      result?.error ||
      `Erro ao concluir pedido (${response.status}).`

    throw new Error(message)
  }

  return result
}
