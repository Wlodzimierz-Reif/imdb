import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Mdal from "../../components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Dashboard = (props) => {
  const { data, fetchPage, searchYear, returnedYears } = props;
  const [movieData, setMovieData] = useState(null);
  const [modalShown, toggleModalShown] = useState(false);

  const fetchData = (search) => {
    fetch(`https://www.omdbapi.com/?i=${search}&apikey=4c65ecef&`)
      .then((response) => response.json())
      .then((movieData) => {
        setMovieData(movieData);
        toggleModalShown(true);
      })
      .catch((error) => console.log(error));
  };

  const filterResults = () => {
    let filteredArray = [...data.Search];
    filteredArray = filteredArray.filter((film) => {
      return searchYear !== "" && searchYear.length === 4
        ? film.Year === searchYear
        : true;
    });
    return printJsx(filteredArray);
  };

  const printJsx = (array) => {
    return array.map((film, index) => {
      return (
        <div
          className={`${styles.cardContainer} ${styles.fadeInBck}`}
          key={index}
        >
          <Card
            // bg="light"
            className="text-center border-0"
            style={{
              width: "15rem",
            }}
          >
            <Card.Img
              variant="top"
              src={
                film.Poster !== "N/A"
                  ? film.Poster
                  : "https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg"
              }
              alt={film.Title}
            />
            <Card.Body>
              <Card.Title style={{ height: "48px" }}>{film.Title}</Card.Title>
              <Card.Text>{film.Year}</Card.Text>
              <Button
                variant="outline-info"
                onClick={() => {
                  fetchData(film.imdbID);
                }}
              >
                Extra info
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return data && data.Search ? (
    <div className={styles.dashboard}>
      {modalShown ? (
        <Mdal movieData={movieData} toggleModalShown={toggleModalShown} />
      ) : null}

      <div className={styles.filmDisplayContainer}>
        <div className={styles.filmDisplay}>{filterResults()}</div>
      </div>
    </div>
  ) : (
    <div className={styles.dashboard}>
      <div className="text-danger">
        <h2>There is no such movie in the database</h2>
      </div>
    </div>
  );
};

export default Dashboard;
