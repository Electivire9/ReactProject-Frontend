import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MovieBox from "../components/MovieBox";
import Layout from "../layout/Layout";

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=801f3117b8bdd3cee1d9c532a1edb00e";

const MoviePopular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <Layout>
      <Row>
        <Col md={12} lg={12}>
          <div className="grid">
            {movies.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
        </Col>
      </Row>
    </Layout>
  );

  // return (
  //     <>
  //         <div className="container" style={{ width: '80%', marginLeft: '18%' }}>
  //             <div className="grid">
  //                 {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
  //             </div>
  //         </div>
  //     </>
  // );
};

export default MoviePopular;
