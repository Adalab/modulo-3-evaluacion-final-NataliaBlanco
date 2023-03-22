import { Link } from 'react-router-dom';

const CharacterDetail = ({ characterFind }) => {
  return (
    <div className="detail_card">
      <Link to="/">
        <button className="button">Back</button>
      </Link>
      <img
        className="detail_card_img"
        src={characterFind.image}
        alt={characterFind.name}
        title=""
        height="260"
      ></img>
      <p className="detail_card_name">{characterFind.name}</p>
      <p className="detail_card_status">
        Status:{characterFind.alive === true ? 'alive' : 'dead'}
      </p>
      <p className="detail_card_gender">Gender:{characterFind.gender}</p>
    </div>
  );
};

export default CharacterDetail;
