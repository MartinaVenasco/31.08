import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar"
import logo from "./logo.png"
import {RiStarSLine} from 'react-icons/ri'
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("324668");
  const [isRendered, setRendered] = useState(false);

  console.log(inputValue);

  return (
    <div className="App">
    <div className="topContent"> <div className="geeks"></div><img className="logo" src ={logo} alt="logo"></img><Navbar/>
    <div className="title_section"> <h1 className="toprated_h1">Top Rated <i className="star_1" ><RiStarSLine/> </i></h1><h1 className="upcoming_h1">Up Coming...</h1></div></div>
      <MainSection />
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        onFormsubmit={setRendered}
      />
      <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
      />
    </div>
  );
}

export default App;
