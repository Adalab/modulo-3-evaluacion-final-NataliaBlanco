import CharacterCard from './CharacterCard';

const CharacterList = ({ data }) => {
  const detail = data.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} />;
  });

  return (
    <section className="list">
      <ul className="profile">{detail}</ul>
    </section>
  );
};

export default CharacterList;
