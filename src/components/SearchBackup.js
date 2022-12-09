import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar(options) {
  const searchValueRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    fetch("https://api.themoviedb.org/3/search/movie", {
      method: "POST",

      body: JSON.stringify({
        api_key: "287aa00fd9d0384e651f7f3865c5a54f",
        query: searchValueRef.current.value,
        page: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      // .then((json) => alert(JSON.stringify(json))); // to fill in based on callPostBody
      .then((json) => {
        alert(JSON.stringify(json));
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        ref={searchValueRef}
        placeholder="Movie Name"
        className="me-2"
        style={{ maxHeight: "100px" }}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBar;
