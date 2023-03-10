import React, { useState, useRef } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { fetchHelper } from "./helper/fetchHelper";

export const SearchForm = ({ addMovieToList }) => {
  const strRef = useRef("");
  const [searchedMovie, setSearchedMovie] = useState({});
  const [error, setError] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    error && setError(false);
    const str = strRef.current.value;
    const data = await fetchHelper(str);

    if (data.Response === "True") {
      setSearchedMovie(data);
    } else {
      setError(true);
    }
  };

  const movieCategorizer = (mode) => {
    addMovieToList({ ...searchedMovie, mode });
    setSearchedMovie({});
    strRef.current.value = "";
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row className="gap-1">
          <Col md="9">
            <Form.Control ref={strRef} placeholder="Search Movie Name" />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Search Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      <div className="d-flex justify-content-center mt-5">
        {error && <Alert variant="danger">Movie not found</Alert>}
        {searchedMovie.imdbID && (
          <CustomCard
            searchedMovie={searchedMovie}
            movieCategorizer={movieCategorizer}
          />
        )}
      </div>
    </div>
  );
};
