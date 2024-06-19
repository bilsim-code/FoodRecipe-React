import {createContext, useState} from 'react'
import PropTypes from 'prop-types'

export const  AppContext = createContext();

const ProviderFunction = (props) => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList,setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoriteList, setFavoriteList] = useState([])
   async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
            if(!response.ok) {
                throw new Error(`ooops ${response.status}`)
            }
            else {
                const data = await response.json();
                if(data?.data?.recipes) {
                    setRecipeList(data?.data?.recipes)
                    //console.log(data?.data?.recipes)
                    setLoading(false)
                    setSearch('')
                }
            }

        }
        catch(error) {
            setLoading(false)
            setSearch('')
            console.log(error);
        }
    }

    function handleAddToFavorites(getCurrentItem) {
        console.log(getCurrentItem)
        let cpy = [...favoriteList]
        let index = cpy.findIndex(item => item.id === getCurrentItem.id)
        if(index === -1) {
            cpy.push(getCurrentItem)
        }
        else {
            cpy.splice(index)
        }

        setFavoriteList(cpy)
    }
    return(
        <AppContext.Provider value={{search, setSearch, handleSubmit, loading, recipeList,recipeDetailsData, setRecipeDetailsData,favoriteList, setFavoriteList, handleAddToFavorites}}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}
export default ProviderFunction;