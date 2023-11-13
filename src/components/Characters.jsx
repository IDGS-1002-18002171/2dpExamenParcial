import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const Characters = ({ characters }) => {
  const navigate = useNavigate();
  const veerDetalles = (index) => {
    navigate(`/items/id=${index}`);
  };

  return (
    <div className="characters">
      <div className="container-characters">
        {characters.map((character, index) => (
          <div
            className="character-container"
            key={index}
            onClick={() => veerDetalles(index + 1)}
          >
            <div className="character-image-container text-center col-md-4">
              <img
                className="rounded-circle character-image"
                src={character.thumbnail}
                alt={character.title}
              />
            </div>
            <div className="character-details col-md-8">
              <div className="d-flex justify-content-between">
                <h5 style={{ fontSize: "21px" }}>{character.title}</h5>
                <span style={{ fontSize: "15px" }}>{character.category}</span>
              </div>
              <p style={{ fontSize: "13px", margin: "5px 0" }}>
                {character.description}
              </p>
              <br />
              <div className="d-flex justify-content-between">
                <h6>${character.price}</h6>
                <ReactStars
                  count={5}
                  value={character.rating}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
