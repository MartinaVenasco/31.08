import { useState, useEffect } from 'react';
import MainCard from '../MainCard';
import TopRatedList from '../TopRatedList';
import { GET } from '../../utils/api';
import UpComingList from '../UpComingList';
import './index.css';

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    GET('movie', 'popular', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, popular: data.results })));

    GET('movie', 'top_rated', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, topRated: data.results })));
      
    GET('movie', 'upcoming', '&language=en-US&page=1')
      .then(data => setMovieLists(prev => ({ ...prev, upcoming: data.results })));
  }, []);

  return (
    <div className="MainSection">
      { movieLists.popular && <MainCard cardData={ movieLists.popular[0] }/> }
      { movieLists.topRated && <TopRatedList cardData={ movieLists.topRated } /> }
      { movieLists.upcoming && <UpComingList cardData={ movieLists.upcoming } /> }
    </div>
  )
}

export default MainSection;