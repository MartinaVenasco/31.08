import { useEffect, useRef } from "react";
import {RiSearchLine} from 'react-icons/ri'
import "./index.css";

const MainInput = ({
  inputValue,
  setInputValue,
  isRendered,
  onFormsubmit,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onFormsubmit(!isRendered);
  };

  const onHandleInput = (e) => setInputValue(e.target.value);

  // console.log(inputValue);

  return (
    <form className="MainInput" onSubmit={onHandleSubmit}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={onHandleInput}
        maxLength="6"
        placeholder="search by ID: 324688"
        type="text"
      />
      <button type="submit"> <RiSearchLine size={16}/></button>
    </form>
  );
};


export default MainInput;
