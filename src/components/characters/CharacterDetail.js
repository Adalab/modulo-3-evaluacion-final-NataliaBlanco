import { Link } from 'react-router-dom';
import img from '../images/castle.jpg';

const CharacterDetail = ({ characterFind }) => {
  return characterFind ? (
    <div className="detail_card">
      <Link to="/">
        <button className="detail_card_button">Back</button>
      </Link>
      <img
        className="detail_card_img"
        src={characterFind.image === '' ? img : characterFind.image}
        alt="castle"
      ></img>
      <p className="detail_card_n">{characterFind.name}</p>
      <p className="detail_card_a">
        Status: {characterFind.alive === true ? 'alive' : 'dead'}
      </p>
      <p className="detail_card_g">Gender: {characterFind.gender}</p>
      <p className="detail_card_s">Specie: {characterFind.species}</p>
      <p className="detail_card_h">House: {characterFind.house}</p>
    </div>
  ) : (
    ' No se ha encontrado la página '
  );
};
export default CharacterDetail;
