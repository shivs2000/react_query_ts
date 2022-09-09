import React from "react";
import { useQuery } from "@tanstack/react-query";
const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch(`https://swapi.dev/api/`);
    return res.json();
  };
  const { data, status } = useQuery(["planets"], fetchPlanets);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
};

export default Planets;
