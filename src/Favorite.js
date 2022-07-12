const Favorite = ({addLikeMovieClick, movies}) => {
    return (
      <>
        <span className="material-icons" onClick={() => addLikeMovieClick(movies)}>thumb_up_alt</span>
      </>
    )
  }
  
export default Favorite;