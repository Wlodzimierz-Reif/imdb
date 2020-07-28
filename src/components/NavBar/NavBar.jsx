import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const NavBar = (props) => {
  const {
    changeCurrentSearch,
    setData,
    setFetchPage,
    changeSearchYear,
    returnedYears,
  } = props;
  const [searchContents, changeSearchContents] = useState("");

  const dropdownJsx = (
    <DropdownButton
      variant="outline-light"
      id="dropdown-basic-button"
      title="Year"
      className="mx-2"
      onSelect={(e) => changeSearchYear(e)}
    >
      <div style={{ overflowY: "scroll", maxHeight: "75vh" }}>
        <Dropdown.Item eventKey="">All</Dropdown.Item>
        {console.log(returnedYears)}
        {returnedYears.map((year) => (
          <Dropdown.Item eventKey={year}>{year}</Dropdown.Item>
        ))}
      </div>
    </DropdownButton>
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    window.scrollTo(0, 0);
    setData("");
    setFetchPage("1");
    changeCurrentSearch(searchContents);
    changeSearchYear("");
  };

  return (
    <div className={styles.nav}>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand href="#home" className="d-none d-sm-block ">
          ImDaBest Movie Database
        </Navbar.Brand>
        <Form
          inline
          style={{ flexDirection: "row" }}
          onKeyPress={(e) => handleKeyPress(e)}
        >
          <FormControl
            type="text"
            placeholder="Movie"
            className="mr-2"
            onChange={(e) => {
              changeSearchContents(e.target.value);
            }}
          />
          {dropdownJsx}
          <Button variant="outline-success" onClick={search}>
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
