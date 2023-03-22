const Filter = ({ searchN, handleInput, selectH, handleSelect, data }) => {
  const handle2 = (ev) => {
    ev.preventDefault();
    handleInput(ev.target.value);
  };
  return (
    <form className="form">
      <label className="form_label">Filtrar por Nombre</label>
      <input
        className="form_s"
        type="search"
        name="search"
        placeholder="Filtrar por Nombres"
        value={searchN}
        onChange={handle2}
      />
      <label className="form_label">Filtrar por Casa</label>
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
