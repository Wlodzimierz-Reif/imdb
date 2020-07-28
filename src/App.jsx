import React, { useState, useEffect } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";

const App = () => {
  const [data, setData] = useState(null);
  const [currentSearch, changeCurrentSearch] = useState("");
  const [fetchPage, setFetchPage] = useState("1");
  const [searchYear, changeSearchYear] = useState("");
  const [returnedYears, setReturnedYears] = useState([]);

  useBottomScrollListener(() => {
    fetchData(currentSearch);
  });

  const fetchData = (search) => {
    fetch(
      `https://www.omdbapi.com/?apikey=f7e6a725&s=${search}&page=${fetchPage}`
    )
      .then((response) => response.json())
      .then((result) => {
        setFetchPage(parseInt(fetchPage) + 1);
        data
          ? setData({ ...data, Search: [...data.Search, ...result.Search] })
          : setData(result);
        const years = result.Search.map((movie) => movie.Year);
        if (fetchPage == "1") {
          setReturnedYears(years);
        } else {
          returnedYears.length > 0
            ? setReturnedYears(getYears(returnedYears, years))
            : setReturnedYears(years);
        }
      })
      .catch((error) => console.log(error));
  };

  const getYears = (oldYears, newYears) => {
    function arrayUnique(array) {
      var a = array.concat();
      for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
          if (a[i] === a[j]) a.splice(j--, 1);
        }
      }

      return a;
    }
    const allYears = arrayUnique(oldYears.concat(newYears)).sort();
    return allYears;
  };

  useEffect(() => {
    fetchData(currentSearch);
  }, [currentSearch]);

  return (
    <div className={styles.app}>
      <NavBar
        changeCurrentSearch={changeCurrentSearch}
        setData={setData}
        setFetchPage={setFetchPage}
        changeSearchYear={changeSearchYear}
        returnedYears={returnedYears}
        // setReturnedYears={setReturnedYears}
        filterMovies={(value) => changeSearchYear(value)}
        // filterMovies={(value) => console.log(value)}
      />
      <Dashboard data={data} fetchPage={fetchPage} searchYear={searchYear} />
    </div>
  );
};

export default App;
