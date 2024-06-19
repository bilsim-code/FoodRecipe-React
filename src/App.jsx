import {Routes, Route} from 'react-router-dom'
import Navbar from './assets/Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Favorites from './Pages/Favorites/Favorites'
import Details from './Pages/Details/Details'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/recipe-item/:id' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App