import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link to={`/character/${eachCharacter.id}`}>
      <li className="profile_card" key={eachCharacter.id}>
        <img
          className="profile_card_img"
          src={eachCharacter.image}
          alt={eachCharacter.name}
        ></img>
        <p className="profile_card_text">{eachCharacter.name}</p>
        <p className="profile_card_text">{eachCharacter.species}</p>
        <p className="profile_card_text">{eachCharacter.gender}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
