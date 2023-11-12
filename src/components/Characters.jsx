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
        {
          /*Recorriendo los datos y mostando los nombres de los personajes*/
          // eslint-disable-next-line react/prop-types
          characters.map((character, index) => (
            <div
              className="character-container"
              key={index}
              onClick={() => veerDetalles(index + 1)}
            >
              <div>
                <img
                  style={{
                    borderRadius: "100%",
                    width: "10rem",
                    height: "10rem",
                    border: "4px solid #000000", // Ajusta el grosor y color del borde según tus preferencias
                  }}
                  src={character.thumbnail}
                  alt={character.tittle}
                />
              </div>
              <div>
                <div className="row">
                  <div className="d-flex justify-content-start">
                    <h5>{character.title}</h5>
                  </div>
                  <div className="d-flex justify-content-end">
                    <span>{character.category}</span>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <p>
                    <span>{character.description}</span>
                  </p>
                </div>
                <br></br>
                <div className="row">
                  <div className="d-flex justify-content-start">
                    <h6>${character.price}</h6>
                  </div>
                  <div className="d-flex justify-content-end">
                    {/* Utilizamos ReactStars para mostrar la calificación en forma de estrellas */}
                    <ReactStars
                      count={5}
                      value={character.rating}
                      size={24}
                      edit={false}
                      activeColor="#ffd700" // Color de las estrellas llenas
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Characters;
