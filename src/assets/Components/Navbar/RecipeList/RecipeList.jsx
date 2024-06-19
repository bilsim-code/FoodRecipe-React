import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const RecipeList = ({item}) => {
  return (
    <div className="home-images">
      <img src={item.image_url} alt="image" />
      <h2 className='publisher'>{item.publisher}</h2>
      <h3>{item.title}</h3>
      <Link to={`/recipe-item/${item.id}`} className='item-link'>Recipe details</Link>
    </div>
  ); 
};

RecipeList.propTypes = {
    item: PropTypes.object,
}

export default RecipeList;
