import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';



function App() {

  return (
    <div className="App">
      {/* navbar */}
      <Banner isbanner="yes"/>
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="In Theatre" fetchUrl={requests.fetchInTheatre} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
