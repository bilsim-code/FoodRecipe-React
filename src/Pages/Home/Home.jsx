import { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import './Home.css'
import RecipeList from "../../assets/Components/Navbar/RecipeList/RecipeList"

const Home = () => {
    const {loading, recipeList} = useContext(AppContext)
    if(loading) {
        return <div>Loading... Please wait!</div>
    }
  return (
    <div className="home">
        {
            recipeList && recipeList.length > 0 ?
            recipeList.map(item => (
               <RecipeList key={item.id} item={item}/>
            )):
            <div>
                <p className="sth-else"> Nothing to show.Please search for something else</p>
                </div>
        }
    </div>
  )
}

export default Home