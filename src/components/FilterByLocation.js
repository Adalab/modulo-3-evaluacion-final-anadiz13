import React from "react";
const FilterByLocation = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.name, ev.target.value);
  };
  return (
    <>
      <label clasName="label__especie" htmlFor="especie">
        Filtrar por localización
      </label>
      <input
        className="form__especie"
        type="text"
        name="location"
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByLocation;
