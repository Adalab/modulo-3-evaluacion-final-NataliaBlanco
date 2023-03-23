import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import dataApi from './service/Data';
import Filter from './form/Filter';
import CharacterList from './characters/CharacterList';
import Header from './Header';
import CharacterDetail from './characters/CharacterDetail';
import img from './images/castle.jpg';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [data, setData] = useState([]);
  const [searchN, setsSearchN] = useState('');
  const [selectH, setSelectH] = useState('gryffindor');

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    dataApi(selectH).then((rightData) => {
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

  const { pathname } = useLocation();

  const detailUrl = matchPath('/character/:id', pathname);
  const characterId = detailUrl !== null ? detailUrl.params.id : null;

  const characterFind = filteredChar().find(
    (eachChar) => eachChar.id === characterId
  );

  /* HTML */
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                searchN={searchN}
                handleInput={handleInput}
                selectH={selectH}
                handleSelect={handleSelect}
              />
              <CharacterList filteredChar={filteredChar()} />
            </>
          }
        ></Route>
        <Route
          path="/character/:id"
          element={<CharacterDetail characterFind={characterFind} img={img} />}
        ></Route>
      </Routes>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
