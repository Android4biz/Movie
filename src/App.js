import { useEffect, useState } from "react";
import "./App.scss";
import Cards from "./Cards";
import Header from "./Header";
import Favorite from "./Favorite";
import Footer from "./Footer";
import Likes from "./Likes";

function App(props) {
    const [movie, setMovie] = useState([]);
    const [value, setValue] = useState("");
    const [favorites, setFavorites] = useState([]);
    console.log(favorites)

    const getMovieApi = async value => {
        const response = await fetch(
            `http://www.omdbapi.com/?&s=${value}&apikey=852b0f60`
        );
        const data = await response.json();
        if (data.Search) {
            setMovie(data.Search);
        }
    };

    useEffect(
        () => {
            getMovieApi(value);
        },
        [value]
    );

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    const addLikeMovie = (movie) => {
        const newMovie = [...favorites, movie];
        setFavorites(newMovie);
    };

    return (
      <div className="App">
        <Header
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      <div className="main">
          {movie.map((elem, key) =>
            <>
                <Cards
                    movies={elem.Poster}
                    key={key}
                    title={elem.Title}
                    year={elem.Year}
                    addLikeMovieClick={addLikeMovie}
                    FavoriteComponent={Favorite}
                />
            </>
          )}
      </div>
      <div className="main-favorites">
            <h5 className="title">Favorites</h5>
            <div className="cards-favorites">
                {favorites.map((elem, key) =>
                    <>
                        <Likes
                            movies={elem}
                            key={key}
                        />
                    </>
                )}
            </div>
      </div>
          <Footer />
      </div>
    );
}

export default App;