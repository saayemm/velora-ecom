
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import About from './pages/About'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='flex flex-col justify-between max-w-[1240px] mx-auto'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:productId' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
