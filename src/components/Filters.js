import FilterByName from "./FilterByName";
import FilterByEspecie from "./FilterByEspecie";
import FilterByLocation from "./FilterByLocation";

const Filters = (props) => {
  const handldeForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handldeForm}>
        <FilterByName name={props.name} handleFilter={props.handleFilter} />
        <FilterByEspecie handleFilter={props.handleFilter} />
        <FilterByLocation handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
