const CharacterCard = ({ eachCharacter, idx }) => {
  return (
    <li className="profile_card" key={idx}>
      <a href=".">
        <img
          className="img_card"
          src={eachCharacter.image}
          alt={eachCharacter.name}
          title=""
        ></img>
        <h3>{eachCharacter.name}</h3>
        <p>{eachCharacter.species}</p>
      </a>
    </li>
  );
};

export default CharacterCard;
