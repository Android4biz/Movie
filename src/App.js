import { useEffect, useState } from "react";
import "./App.scss";
import Cards from "./Cards";
import Header from "./layout/Header";
import Favorite from "./Favorite";
import Remove from "./Remove";
import Footer from "./layout/Footer";

function App(props) {
    const [movie, setMovie] = useState([]);
    const [value, setValue] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [toggle, setToggle] = useState(true)

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

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const addLikeMovie = (movie) => {
        const newMovie = [...favorites, movie];
        setFavorites(newMovie);
    };

    const RemoveFavoriteMovie = (movie) => {
        const removeMovie = favorites.filter(
            favorite => favorite.imdbID !== movie.imdbID
        );
        setFavorites(removeMovie);
    };

    const favoritesFlag = () => {
        setToggle(false)
    }

    return (
        <div className="App">
            <Header
                value={value}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <div className="main" onClick={()=> favoritesFlag(favorites)}>
                <Cards
                    movie={movie}
                    addLikeMovieClick={addLikeMovie}
                    favoriteComponent={Favorite}
                />
            </div>
            <div className="main-favorites">
                <h5 className="title">{ toggle ? true : 'favorites' }</h5>
                <div className="cards-favorites">
                    <Cards
                        movie={favorites}
                        addLikeMovieClick={RemoveFavoriteMovie}
                        favoriteComponent={Remove}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
