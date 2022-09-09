import React, { SetStateAction } from "react";
type NavbarProps = {
  setPage: React.Dispatch<SetStateAction<string>>;
};
const Navbar = (props: NavbarProps) => {
  return (
    <nav>
      <button onClick={() => props.setPage("planets")}>Planets</button>
      <button onClick={() => props.setPage("people")}>People</button>
    </nav>
  );
};

export default Navbar;
