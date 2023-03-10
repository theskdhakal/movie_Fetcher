import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { Display } from "./Display";
import { SearchForm } from "./SearchForm";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovieToList = (movie) => {
    const tempArg = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempArg, movie]);
  };

  const handleOnDelete = (imdbID) => {};
  return (
    <div className="wrapper bg-dark text-warning">
      <Container>
        {/* title */}
        <Row>
          <Col>
            <h1 className="mt-5 text-center">Movie Fetcher</h1>
          </Col>
        </Row>
        <hr />

        <SearchForm addMovieToList={addMovieToList} />
        <Display movieList={movieList} />
      </Container>
    </div>
  );
}

export default App;
