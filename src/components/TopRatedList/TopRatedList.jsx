import MainCard from '../MainCard';
import './index.css';

const TopRatedList = ({ cardData }) => {

  return (
    <div className="TopRatedList">
    
      {
       cardData.map((cardData, ii) => <MainCard cardData={ cardData } value={{className:"TopRated__card"}} key={ii}/>)
      }
    </div>
  )
}

export default TopRatedList;