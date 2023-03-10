import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ searchedMovie, movieCategorizer }) => {
  return (
    <Card style={{ width: "20rem", color: "black" }}>
      <Card.Img variant="top" src={searchedMovie?.Poster} />
      <Card.Body>
        <Card.Title>{searchedMovie?.Title}</Card.Title>
        <Card.Text className="mt-4 mb-4">
          {searchedMovie?.Plot?.slice(0, 50)}...
        </Card.Text>
        {!searchedMovie.mode ? (
          <>
            <div className="d-flex justify-content-between">
              <Button
                variant="warning"
                onClick={() => movieCategorizer("happy")}
              >
                Happy
              </Button>
              <Button variant="info" onClick={() => movieCategorizer("lazy")}>
                Lazy
              </Button>
            </div>

            <div className="d-grid mt-3">
              <Button
                onClick={() => movieCategorizer(searchedMovie.imdbID)}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </>
        ) : (
          <div className="d-grid mt-3">
            <Button
              // onClick={() => handleOnDelete(searchedMovie.imdbID)}
              variant="danger"
            >
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};