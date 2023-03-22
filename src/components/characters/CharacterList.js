import CharacterCard from './CharacterCard';

const CharacterList = ({ filteredChar }) => {
  const detail = filteredChar.map((eachCharacter, idx) => {
    return <CharacterCard eachCharacter={eachCharacter} idx={idx} />;
  });

  return (
    <section className="list">
      <ul className="profile">{detail}</ul>
    </section>
  );
};

export default CharacterList;
