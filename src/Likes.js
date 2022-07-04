function Likes({ favorites, movies }) {
    return (
      <div className="card">
          <img
              src={movies}
              className="img"
              alt="movie-img"
          />
          <div className="overlay">
          </div>
      </div>
    );
  }
  
  export default Likes;