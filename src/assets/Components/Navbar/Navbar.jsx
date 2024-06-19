import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { AppContext } from '../../../Context/AppContext'

const Navbar = () => {
  const {search, setSearch, handleSubmit} = useContext(AppContext)
  return (
    <div className="nav">
      <h2 className="nav-h2">FoodRecipes</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='Enter Items...' className='nav-input' value={search} onChange={e => setSearch(e.target.value)} />
      </form>
      <ul className='nav-ul'>
        <li>
          <NavLink to={'/'} className={'link'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className={'link'}>Favorites</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Navbar