import React from "react";
type PlanetProps = {
  name: string;
  population: string;
  terrain: string;
};
const Planet = ({ name, population, terrain }: PlanetProps) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {terrain}</p>
    </div>
  );
};

export default Planet;
