import '../styles/App.scss';
import { useState, useEffect } from 'react';
import dataApi from './service/Data';
import Filter from './filter/Filter';
import CharacterList from './characters/CharacterList';
import Header from './Header';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [data, setData] = useState([]);
  const [searchN, setsSearchN] = useState('');
  const [selectH, setSelectH] = useState('gryffindor');

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    dataApi(selectH).then((rightData) => {
      console.log(rightData);
      setData(rightData);
    });
  }, [selectH]);
  /* FUNCIONES HANDLER */
  const handleInput = (value) => {
    setsSearchN(value);
  };

  const handleSelect = (value) => {
    setSelectH(value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const filteredChar = () => {
    return data
      .filter((eachChar) => {
        return eachChar.name
          .toLocaleLowerCase()
          .includes(searchN.toLocaleLowerCase());
      })
      .filter((eachChar) => {
        if (selectH === 'gryffindor') return true;
        else {
          return eachChar.house === selectH;
        }
      });
  };

  /* HTML */
  return (
    <div className="App">
      <Header />
      <Filter
        searchN={searchN}
        handleInput={handleInput}
        selectH={selectH}
        handleSelect={handleSelect}
      />
      <CharacterList filteredChar={filteredChar()} />
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
