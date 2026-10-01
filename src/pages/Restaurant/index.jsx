import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import DishCard from '../../components/DishCard'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import { getRestaurants } from '../../services/api'
import {
  addToCart,
  selectCartCount
} from '../../store/reducers/cart'

import {
  Header,
  HeaderContent,
  BackLink,
  Brand,
  CartLink,
  Hero,
  HeroContent,
  Category,
  Name,
  Main,
  Menu,
  Message
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const [restaurant, setRestaurant] = useState(null)
  const [dish, setDish] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRestaurants()
      .then((list) => {
        setRestaurant(
          list.find((item) => String(item.id) === String(id)) || null
        )
      })
      .finally(() => setLoading(false))
  }, [id])

  const closeModal = useCallback(() => setDish(null), [])

  if (loading) return <Message>Carregando restaurante...</Message>
  if (!restaurant) return <Navigate to="/" replace />

  return (
    <>
      <Header>
        <HeaderContent className="container">
          <BackLink to="/">Restaurantes</BackLink>
          <Brand to="/">efood</Brand>
          <CartLink to="/carrinho">
            {cartCount} produto(s) no carrinho
          </CartLink>
        </HeaderContent>
      </Header>

      <Hero $image={restaurant.capa}>
        <HeroContent className="container">
          <Category>{restaurant.tipo}</Category>
          <Name>{restaurant.titulo}</Name>
        </HeroContent>
      </Hero>

      <Main>
        <Menu className="container">
          {restaurant.cardapio.map((item) => (
            <DishCard
              key={item.id}
              dish={item}
              onBuy={setDish}
            />
          ))}
        </Menu>
      </Main>

      <Footer />

      <ProductModal
        dish={dish}
        onClose={closeModal}
        onAdd={(product) => {
          dispatch(addToCart(product))
          closeModal()
        }}
      />
    </>
  )
}

export default Restaurant
