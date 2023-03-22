import { Link } from 'react-router-dom';

const CharacterDetail = ({ characterFind }) => {
  return (
    <div className="detail_card">
      <Link to="/">
        <button clasName="button">Back</button>
      </Link>
      <img
        className="img_card"
        src={characterFind.image}
        alt={characterFind.name}
        title=""
      ></img>
      <p>{characterFind.name}</p>
      <p>Status:{characterFind.alive === true ? 'alive' : 'dead'}</p>
      <p>Gender:{characterFind.gender}</p>
    </div>
  );
};

export default CharacterDetail;
