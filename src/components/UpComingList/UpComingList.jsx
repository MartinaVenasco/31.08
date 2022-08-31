import MainCard from '../MainCard';
import './index.css';

const UpComingList = ({ cardData }) => {

  return (
    <div className="UpComingList">
      {
       cardData.map((cardData, ii) => <MainCard cardData={ cardData } value={{className:"UpComing__card"}} key={ii}/>)
      }
    </div>
  )
}

export default UpComingList;