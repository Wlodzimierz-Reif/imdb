import React from "react";
import styles from "./Modal.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Modal } from "react-bootstrap";

const Mdal = (props) => {
  const { movieData, toggleModalShown } = props;

  return (
    <div className={`${styles.modalContainer} ${styles.fadeInBck}`}>
      {/* <div className={styles.modal}> */}
      {/* <Card style={{ height: "100%", flexDirection: "row" }}>
          <Card.Img variant="top" src={movieData.Poster} />
          <Card.Body className="py-0">
            <div
              className="sticky-top d-flex justify-content-between bg-white"
              style={{ paddingTop: "1.25rem", marginBottom: "1rem" }}
            >
              <Card.Title className="mt-1">Title: {movieData.Title}</Card.Title>
              <div className={styles.button}>
                <Button
                  variant="warning"
                  onClick={() => {
                    toggleModalShown(false);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
            <Card.Subtitle className="mb-2 text-muted">Released:</Card.Subtitle>
            <Card.Text> {movieData.Released}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Genre:</Card.Subtitle>
            <Card.Text> {movieData.Genre}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Country:</Card.Subtitle>
            <Card.Text> {movieData.Country}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Director:</Card.Subtitle>
            <Card.Text> {movieData.Director}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              imdb Rating:
            </Card.Subtitle>
            <Card.Text> {movieData.imdbRating}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Production:
            </Card.Subtitle>
            <Card.Text> {movieData.Production}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Plot:</Card.Subtitle>
            <Card.Text> {movieData.Plot}</Card.Text>
          </Card.Body>
        </Card> */}

      <Modal.Dialog
        className={styles.modal}
        style={{ height: "100%", width: "100%", flexDirection: "row" }}
      >
        <Modal.Header>
          <Modal.Title>{movieData.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          <p className="mb-2 text-muted">Released:</p>
          <p> {movieData.Released}</p>
          <p className="mb-2 text-muted">Genre:</p>
          <p> {movieData.Genre}</p>
          <p className="mb-2 text-muted">Country:</p>
          <p> {movieData.Country}</p>
          <p className="mb-2 text-muted">Director:</p>
          <p> {movieData.Director}</p>
          <p className="mb-2 text-muted">imdb Rating:</p>
          <p> {movieData.imdbRating}</p>
          <p className="mb-2 text-muted">Production:</p>
          <p> {movieData.Production}</p>
          <p className="mb-2 text-muted">Plot:</p>
          <p> {movieData.Plot}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              toggleModalShown(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      {/* </div> */}
    </div>
  );
};

export default Mdal;
