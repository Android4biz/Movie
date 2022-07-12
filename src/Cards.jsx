function Cards (props) {
  const FavouriteComponent = props.favoriteComponent; 
  return (
    <>
      {props.movie.map((elem, key) => 
        <div className="card" onClick={() => props.addLikeMovieClick(elem)}>
          <h5 className="title">
              {elem.Title}
          </h5>
          <h5 className="title">
              {elem.Year}
          </h5>
          <img
            src={elem.Poster}
            className="img"
            alt="movie-img"
            id={elem.imdbID}
          />
            <FavouriteComponent/>
        </div>
      )}
    </>
  );
}

export default Cards;