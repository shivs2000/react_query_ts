type PersonProps = {
  name: string;
  gender: string;
  birth_year: string;
};
const Person = ({ name, gender, birth_year }: PersonProps) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {gender}</p>
      <p>Terrain - {birth_year}</p>
    </div>
  );
};

export default Person;
