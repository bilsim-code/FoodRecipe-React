import { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import RecipeList from "../../assets/Components/Navbar/RecipeList/RecipeList"

const Favorites = () => {
  const { favoriteList} = useContext(AppContext)
return (
  <div className="home">
      {
          favoriteList && favoriteList.length > 0 ?
          favoriteList.map(item => (
             <RecipeList key={item.id} item={item}/>
          )):
          <div>
              <p className="sth-else"> Nothing is added in favorites</p>
              </div>
      }
  </div>
)
}

export default Favorites