import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import { getRestaurants } from '../../services/api'
import { Main, Grid, Message } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getRestaurants()
      .then(setRestaurants)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Header />

      <Main>
        {loading && <Message>Carregando restaurantes...</Message>}
        {error && <Message>{error}</Message>}

        {!loading && !error && (
          <Grid className="container">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </Grid>
        )}
      </Main>

      <Footer />
    </>
  )
}

export default Home
