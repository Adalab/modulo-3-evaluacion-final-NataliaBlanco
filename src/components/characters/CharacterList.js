import CharacterCard from './CharacterCard';

const CharacterList = ({ filteredChar, img }) => {
  if (filteredChar.length === 0) {
    return 'Introduce un nombre correcto';
  } else {
    const detail = filteredChar.map((eachCharacter) => {
      return (
        <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
      );
    });

    return (
      <section className="list">
        <ul className="profile">{detail}</ul>
      </section>
    );
  }
};

export default CharacterList;
