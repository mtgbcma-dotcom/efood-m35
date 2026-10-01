import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { getRestaurants } from '../../services/api'
import { Main, RestaurantsGrid, Message, RetryButton } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadRestaurants = async () => {
    try {
      setLoading(true)
      setError('')
      setRestaurants(await getRestaurants())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRestaurants()
  }, [])

  return (
    <>
      <Header />
      <Main>
        {loading && <Message>Carregando restaurantes...</Message>}

        {!loading && error && (
          <Message>
            {error}
            <RetryButton onClick={loadRestaurants}>
              Tentar novamente
            </RetryButton>
          </Message>
        )}

        {!loading && !error && (
          <RestaurantsGrid className="container">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </RestaurantsGrid>
        )}
      </Main>
      <Footer />
    </>
  )
}

export default Home
