import React from "react"; 
import './App.css';
import Favourites from "./Components/Favourites";
import Modal from "./Components/Modal";
import Meals from "./Components/Meals";
import Search from "./Components/Search";
import {useGlobalContext} from "./Context";

function App() {
  const {showModal} =useGlobalContext()
  return (
    <main>
      {<Search></Search>}
      <Favourites></Favourites>
      <Meals></Meals>
      {showModal && <Modal/>}
      
    </main>
  );
}

export default App;
