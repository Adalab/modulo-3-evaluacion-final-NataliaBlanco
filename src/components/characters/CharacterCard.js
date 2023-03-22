import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter, idx }) => {
  return (
    <Link to={`/character/${eachCharacter.id}`}>
      <li className="profile_card" key={idx}>
        <img
          className="img_card"
          src={eachCharacter.image}
          alt={eachCharacter.name}
          title=""
        ></img>
        <p>{eachCharacter.name}</p>
        <p>{eachCharacter.species}</p>
        <p>{eachCharacter.gender}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;
