import FilterByName from "./FilterByName";
import FilterByEspecie from "./FilterByEspecie";

const Filters = (props) => {
  const handldeForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handldeForm}>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByEspecie handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
