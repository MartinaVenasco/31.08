import './index.css';
import {RiStarSLine} from 'react-icons/ri'
const MainCard = ({ cardData, value={className:"MainCard"} }) => {
  const { title, vote_average, poster_path } = cardData;

  return (
    <div className={value.className}>
      <img className="MainCard--img" src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ title } />
      <div className="MainCard__text">
        <h3>{ title }</h3>
        <p>{ vote_average } <i className='star'><RiStarSLine/></i> </p>
      </div>
    </div>
  )
}

export default MainCard;