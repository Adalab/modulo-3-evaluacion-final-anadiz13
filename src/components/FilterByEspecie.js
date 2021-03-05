import React from "react";
const FilterByEspecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.especie, ev.target.value);
  };
  return (
    <>
      <label htmlFor="especie">Filtrar por especie</label>
      <input
        className="form__especie"
        type="text"
        name="name"
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByEspecie;
