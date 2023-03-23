const Filter = ({ searchN, handleInput, selectH, handleSelect }) => {
  const handle2 = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    handleInput(inputValue);
  };
  return (
    <form className="form">
      <label className="form_label">Filter by Name</label>
      <input
        className="form_s"
        type="search"
        name="search"
        placeholder="Filter by Name"
        value={searchN}
        onChange={handle2}
      />
      <label className="form_label">Filter by House</label>
      <select
        className="form_s"
        name="select"
        onChange={(ev) => {
          handleSelect(ev.target.value);
        }}
        value={selectH}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </form>
  );
};

export default Filter;
