import ReactStars from "react-rating-stars-component";

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
          <div
            className="row"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Agrega una sombra sutil
              borderRadius: "10px", // Agrega bordes redondeados
              padding: "15px", // Ajusta el relleno según sea necesario
            }}
          >
            {character.images.map((image, index) => (
              <div
                key={index}
                className={`col-md-${12 / character.images.length}`}
              >
                <img
                  style={{
                    borderRadius: "100%",
                    width: "10rem",
                    height: "10rem",
                    border: "4px solid #000000",
                  }}
                  src={image}
                  alt={`${character.title} Image ${index + 1}`}
                />
              </div>
            ))}
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
