const Filter = ({ searchN, handleInput, selectH, handleSelect, data }) => {
  const handle2 = (ev) => {
    ev.preventDefault();
    handleInput(ev.target.value);
  };
  return (
    <form>
      <label className="header__label">Filtrar por Nombre</label>
      <input
        className=""
        autoComplete="off"
        type="search"
        name="search"
        placeholder="Filtrar por Nombres"
        value={searchN}
        onChange={handle2}
      />
      <label className="header__label">Filtrar por Casa</label>
      <select
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
