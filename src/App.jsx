import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
    <Route path="/carrinho" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/confirmacao" element={<Confirmation />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App
