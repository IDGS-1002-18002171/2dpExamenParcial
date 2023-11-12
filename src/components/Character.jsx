import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-bootstrap"; // Importa el componente Carousel de Bootstrap

const Character = ({ character }) => {
  return (
    <div className="characters">
      <div
        className="container-character"
        style={{
          width: "100%",
          height: "10rem",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "whitesmoke",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Agrega una sombra sutil
            borderRadius: "10px", // Agrega bordes redondeados
            padding: "15px", // Ajusta el relleno según sea necesario
          }}
        >
          <div className="row justify-content-center">
            {character.images.length > 1 ? ( // Verifica si hay más de una imagen
              <Carousel>
                {character.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image}
                      alt={`${character.title} Image ${index + 1}`}
                      className="d-block w-100"
                      style={{
                        borderRadius: "100%",
                        height: "auto", // Hace que la altura se ajuste automáticamente
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <div className="col-md-12 text-center">
                <img
                  src={character.images[0]}
                  alt={`${character.title} Image 1`}
                  style={{
                    borderRadius: "100%",
                    width: "10rem",
                    height: "10rem",
                    border: "4px solid #000000",
                  }}
                />
              </div>
            )}
          </div>

          <br></br>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <h5>{character.title}</h5>
            </div>
            <div className="col-md-2">
              <span>{character.category}</span>
            </div>
            <div className="col-md-4"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <p>
                <span>{character.description}</span>
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <h6>${character.price}</h6>
            </div>
            <div className="col-md-2">
              {/* Utilizamos ReactStars para mostrar la calificación en forma de estrellas */}
              <ReactStars
                count={5}
                value={character.rating}
                size={24}
                edit={false}
                activeColor="#ffd700" // Color de las estrellas llenas
              />
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button className="btn btn-success">Comprar</button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
