import { useCallback, useEffect, useState } from "react";
import { products } from "../assets/products.json";
//import "../css/style.css";
import { useSearchParams } from "react-router-dom";
import imagenNotFound from "../assets/imagenes/no-image.jpg";
import bazar from "../assets/imagenes/bazar.png";
import Characters from "./Characters";
import { Form, FormControl, Container, Image, Row } from "react-bootstrap";

const ProductList = () => {
  const [params] = useSearchParams();

  const searchTerm = params.get("search"); // search de query
  //Definimos un state para almacenar los datos de los characters.
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState(searchTerm);

  //Agregamos una funcion para hacer una peticion a jsonPlaceHolder
  const getUsuarios = useCallback(async () => {
    try {
      const dataArray = Object.values(products);
      const searchRegex = new RegExp(search, "i");

      const results = dataArray.filter((item) => {
        return searchRegex.test(item.title);
      });
      if (results.length > 0) {
        setCharacters(results);
      } else {
        setCharacters(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const handleSubmit = (e) => {
    //Evitamos el comportamiento normal del Submit
    e.preventDefault();
    //0btenemos el valor del input.
    const text = e.target[0].value;
    setSearch(text);
  };

  useEffect(() => {
    getUsuarios();
  }, [search, getUsuarios]);

  return (
    <div className="App">
      <header className="App-header">
        {characters ? (
          <>
            <Container>
              <Row>
                <Image
                  src={bazar}
                  fluid
                  style={{ width: "7rem", height: "4rem" }}
                />
                <Form onSubmit={handleSubmit} style={{ width: "auto" }}>
                  <br></br>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form>
              </Row>
            </Container>
            <p style={{ fontFamily: "-moz-initial" }}>
              Resultados de la búsqueda de : {search}
            </p>
            <Characters characters={characters} />
          </>
        ) : (
          <>
            <Container>
              <Row>
                <Image
                  src={bazar}
                  fluid
                  style={{ width: "7rem", height: "4rem" }}
                />
                <Form onSubmit={handleSubmit} style={{ width: "auto" }}>
                  <br></br>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSubmit}
                  />
                </Form>
              </Row>
            </Container>
            <p style={{ fontFamily: "-moz-initial" }}>
              Sin resultados al buscar: {search}
            </p>
            <img
              src={imagenNotFound}
              alt="Sin resultados"
              className="img-home"
              style={{ width: "80%", height: "auto" }}
            />
          </>
        )}
      </header>
    </div>
  );
};

export default ProductList;
