import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import DishCard from '../../components/DishCard'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import { getRestaurants } from '../../services/api'

import {
  TopHeader,
  TopHeaderContent,
  HeaderLink,
  Brand,
  CartText,
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

  const [restaurant, setRestaurant] = useState(null)
  const [selectedDish, setSelectedDish] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        setLoading(true)
        setError('')

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

  const addToCart = (dish) => {
    setCartCount((current) => current + 1)
    setSelectedDish(null)
    window.alert(`${dish.nome} foi adicionado ao carrinho.`)
  }

  if (notFound) {
    return <Navigate to="/" replace />
  }

  if (loading) {
    return <Message>Carregando restaurante...</Message>
  }

  if (error) {
    return <Message>{error}</Message>
  }

  if (!restaurant) {
    return null
  }

  return (
    <>
      <TopHeader>
        <TopHeaderContent className="container">
          <HeaderLink to="/">Restaurantes</HeaderLink>
          <Brand to="/">efood</Brand>
          <CartText>{cartCount} produto(s) no carrinho</CartText>
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
        onAdd={addToCart}
      />
    </>
  )
}

export default Restaurant
