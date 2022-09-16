import { useQuery } from "@tanstack/react-query";
import Person from "./Person";
import Planet from "./Planet";
const fetchPeople = async () => {
  const res = await fetch(`https://swapi.dev/api/people/`);
  return res.json();
};
const People = () => {
  const { data, status } = useQuery(["planets"], fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      <p>{status}</p>
      {status === "error" && <div> Oops Error Occured</div>}
      {status === "loading" && <div>Loding Wait!!</div>}
      {status === "success" && data && (
        <div>
          {data.results.map((person: any) => (
            <Person
              name={person.name}
              gender={person.gender}
              birth_year={person.birth_year}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
