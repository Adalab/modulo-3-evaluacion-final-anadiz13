import React from "react";
const FilterByEspecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.name, ev.target.value);
  };
  return (
    <>
      <label clasName="label__especie" htmlFor="especie">
        Filtrar por especie
      </label>
      <input
        className="form__especie"
        type="text"
        name="specie"
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByEspecie;
