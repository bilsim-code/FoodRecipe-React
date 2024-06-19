import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../../Context/AppContext";
import "./Details.css"

const Details = () => {
const {id} = useParams();
const {recipeDetailsData, setRecipeDetailsData, handleAddToFavorites} = useContext(AppContext)

useEffect(() => {
  async function getRecipeDetails() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    if(!response.ok) {
      throw new Error(`ooops!! ${response.status}`)
    }
    else {
      const data = await response.json();
      console.log(data.data.recipe);
      setRecipeDetailsData(data.data)
    }
  }

  getRecipeDetails()
}, [id, setRecipeDetailsData])


  return (
      <div className="details-outer">
        <div className="det">
        <div className="detailscont">
          <img src={recipeDetailsData?.recipe?.image_url} alt="" className="details-img"/>   
          <h2>{recipeDetailsData?.recipe?.publisher}</h2>
          <h3>{recipeDetailsData?.recipe?.title}</h3>
         
          </div>
          <button onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)} className="details-btn">Save as favorites</button>
        </div>
     
        
        <div className="details-inner">
          <div className="ingridients">
            <ul>
              {
                recipeDetailsData?.recipe?.ingredients?.map((ingridient, index) => (
                  <li key={index}>
                    <span>{ingridient.quantity}: {ingridient.unit}</span>
                    <span>{ingridient.description}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          
        </div>

      </div>
  )
}

export default Details