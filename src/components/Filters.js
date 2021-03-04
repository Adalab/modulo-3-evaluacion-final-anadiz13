import FilterByName from "./FilterByName";

const Filters = (props) => {
  const hanldeForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={hanldeForm}>
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
