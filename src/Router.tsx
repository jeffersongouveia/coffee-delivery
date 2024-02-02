import { Route, Routes } from 'react-router-dom'

import HomeLayout from './layouts/HomeLayout.tsx'
import Home from './pages/Home/Home.tsx'
import Checkout from './pages/Checkout/Checkout.tsx'
import Success from './pages/Success/Success.tsx'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
