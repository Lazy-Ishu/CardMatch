import React from "react";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { CgPokemon } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";

const CustomiseButtons = ({ BoardChoose }) => {
  return (
    <div className="customise">
        <p>Customise:</p>
      <button
        className="alphabet iconButton"
        value="alphabet"
        onClick={BoardChoose}
      >
        <TiSortAlphabeticallyOutline size={28} />
      </button>
      <button
        className="pokemon iconButton"
        value="pokemon"
        onClick={BoardChoose}
      >
        <CgPokemon size={28} />
      </button>
      <button
        className="pokemon iconButton"
        value="continent"
        onClick={BoardChoose}
      >
        <BiWorld size={28} />
      </button>
    </div>
  );
};

export default CustomiseButtons;
