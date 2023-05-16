import { Link } from 'react-router-dom';
import img from '../images/castle.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
const CharacterDetail = ({ characterFind }) => {
  return characterFind ? (
    <div className="body-detail">
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
          <section className="detail_card_section">
            <p className="detail_card_section_n">{characterFind.name}</p>
            <p className="detail_card_section_a">
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
            <p className="detail_card_section_p">
              Gender: {characterFind.gender}
            </p>
            <p className="detail_card_section_p">
              Specie: {characterFind.species}
            </p>
            <p className="detail_card_section_p">
              House: {characterFind.house}
            </p>
          </section>
        </section>
      </div>
    </div>
  ) : (
    ' No se ha encontrado la página '
  );
};
export default CharacterDetail;
