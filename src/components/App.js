import '../styles/App.scss';
import { useState, useEffect } from 'react';
import dataApi from './service/Data';
import filter from './filter/Filter';
import CharacterList from './characters/CharacterList';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataApi().then((rightData) => {
      console.log(rightData);
      setData(rightData);
    });
  }, []);

  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div className="App">
      <header>
        <h1>Harry Potter</h1>
      </header>
      <form>
        <input></input>
        <select>
          <option></option>
        </select>
      </form>
      <CharacterList data={data} />
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
