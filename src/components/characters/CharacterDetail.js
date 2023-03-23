import { Link } from 'react-router-dom';
import img from '../images/castle.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
const CharacterDetail = ({ characterFind }) => {
  return characterFind ? (
    <div className="detail">
      <Link to="/">
        <button className="detail_button">Back</button>
      </Link>
      <section className="detail_card">
        <img
          className="detail_card_img"
          src={characterFind.image === '' ? img : characterFind.image}
          alt="castle"
        ></img>
        <p className="detail_card_n">{characterFind.name}</p>
        <p className="detail_card_a">
          Status:
          {characterFind.alive === true ? (
            <>
              alive <FontAwesomeIcon icon={faHeartbeat} />
            </>
          ) : (
            <>
              dead <FontAwesomeIcon icon={faSkull} />
            </>
          )}
          {'   '}
        </p>
        <p className="detail_card_g">Gender: {characterFind.gender}</p>
        <p className="detail_card_s">Specie: {characterFind.species}</p>
        <p className="detail_card_h">House: {characterFind.house}</p>
      </section>
    </div>
  ) : (
    ' No se ha encontrado la página '
  );
};
export default CharacterDetail;
