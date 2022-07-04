function Cards({ movies, title, year, addLikeMovieClick, FavoriteComponent }) {
  return (
    <div className="card">
        <h5 className="title">
            {title}
        </h5>
        <h5 className="title">
            {year}
        </h5>
        <img
            src={movies}
            className="img"
            alt="movie-img"
            onClick={() => addLikeMovieClick(movies)}
        />
        <div className="overlay">
          <FavoriteComponent/>
        </div>
    </div>
  );
}

export default Cards;