import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import DishCard from '../../components/DishCard'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import { getRestaurants } from '../../services/api'
import { addToCart, selectCartCount } from '../../store/reducers/cart'

import {
  TopHeader,
  TopHeaderContent,
  HeaderLink,
  Brand,
  CartLink,
  RestaurantHero,
  RestaurantHeroContent,
  Category,
  RestaurantName,
  MenuGrid,
  PageMain,
  Message
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const [restaurant, setRestaurant] = useState(null)
  const [selectedDish, setSelectedDish] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        setLoading(true)
        const restaurants = await getRestaurants()
        const found = restaurants.find(
          (item) => String(item.id) === String(id)
        )

        if (!found) {
          setNotFound(true)
          return
        }

        setRestaurant(found)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurant()
  }, [id])

  const closeModal = useCallback(() => {
    setSelectedDish(null)
  }, [])

  if (notFound) return <Navigate to="/" replace />
  if (loading) return <Message>Carregando restaurante...</Message>
  if (error) return <Message>{error}</Message>
  if (!restaurant) return null

  return (
    <>
      <TopHeader>
        <TopHeaderContent className="container">
          <HeaderLink to="/">Restaurantes</HeaderLink>
          <Brand to="/">efood</Brand>
          <CartLink to="/carrinho">
            {cartCount} produto(s) no carrinho
          </CartLink>
        </TopHeaderContent>
      </TopHeader>

      <RestaurantHero $image={restaurant.capa}>
        <RestaurantHeroContent className="container">
          <Category>{restaurant.tipo}</Category>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </RestaurantHeroContent>
      </RestaurantHero>

      <PageMain>
        <MenuGrid className="container">
          {restaurant.cardapio.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onBuy={setSelectedDish}
            />
          ))}
        </MenuGrid>
      </PageMain>

      <Footer />

      <ProductModal
        dish={selectedDish}
        onClose={closeModal}
        onAdd={(dish) => {
          dispatch(addToCart(dish))
          closeModal()
        }}
      />
    </>
  )
}

export default Restaurant
