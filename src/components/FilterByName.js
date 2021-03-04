import React from "react";
const FilterByName = (props) => {
  return (
    <>
      <label htmlFor="name">Filtrar por nombre</label>
      <input className="form__input" type="text" name="name" />
    </>
  );
};

export default FilterByName;
