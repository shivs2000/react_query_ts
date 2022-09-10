import React from "react";
import { useQuery } from "@tanstack/react-query";
import Planet from "./Planet";
const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch(`https://swapi.dev/api/planets/1/`);
    return res.json();
  };
  const { data, status } = useQuery(["planets"], fetchPlanets);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      <p>{status}</p>
      {status === "error" && <div> Oops Error Occured</div>}
      {status === "loading" && <div>Loding Wait!!</div>}
      {status === "success" && (
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
