import React from "react";
import { useQuery } from "@tanstack/react-query";
import Planet from "./Planet";
const fetchPlanets = async () => {
  const res = await fetch(`https://swapi.dev/api/planets/`);
  return res.json();
};
const Planets = () => {
  const { data, status } = useQuery(["planets"], fetchPlanets);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      <p>{status}</p>
      {status === "error" && <div> Oops Error Occured</div>}
      {status === "loading" && <div>Loding Wait!!</div>}
      {status === "success" && data && (
        <div>
          {data.results.map((planet: any) => (
            <Planet
              name={planet.name}
              terrain={planet.terrain}
              population={planet.population}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
