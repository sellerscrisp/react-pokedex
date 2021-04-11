import React from "react";
import PropTypes from "prop-types";
import PokemonType from "./PokemonType";
import PokedexDataInfo from "./PokedexDataInfo";
import { capitalize } from "../utils";

const PokedexData = ({ id, types, height, weight, abilities }) => (
  <div className="columns is-multiline is-mobile">
    <PokedexDataInfo label="Height" value={height + " m"} />
    <PokedexDataInfo
      label="Type"
      value={
        <div className="tags">
          {types
            .sort((t1, t2) => t1.slot - t2.slot)
            .map((type) => (
              <PokemonType {...type} key={type.slot} />
            ))}
        </div>
      }
    />
    <PokedexDataInfo label="Weight" value={weight + " kg"} />
    <PokedexDataInfo
      label="Abilities"
      value={abilities
        .sort((a1, a2) => a1.slot - a2.slot)
        .filter((ab) => !ab.is_hidden)
        .map((ab) => capitalize(ab.ability.name))
        .join(", ")}
    />
  </div>
);

PokedexData.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  height: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  weight: PropTypes.number.isRequired,
};

export default PokedexData;
