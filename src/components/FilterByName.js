import React from "react";
const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.name, ev.target.value);
  };
  return (
    <>
      <label htmlFor="name">Filtrar por nombre</label>
      <input
        className="form__input"
        type="text"
        name="name"
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
