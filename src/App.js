import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <h2>
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      </h2>
    </div>
  );
}

export default App;
