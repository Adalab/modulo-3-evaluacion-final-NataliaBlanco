import { Link } from 'react-router-dom';
import img from '../images/castle.jpg';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link to={`/character/${eachCharacter.id}`} className="link">
      <li className="profile_card" key={eachCharacter.id}>
        <img
          className="profile_card_img"
          src={eachCharacter.image === '' ? img : eachCharacter.image}
          alt="castle"
        ></img>
        <p className="profile_card_text">{eachCharacter.name}</p>
        <p className="profile_card_text">{eachCharacter.species}</p>
        <p className="profile_card_text">{eachCharacter.gender}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
