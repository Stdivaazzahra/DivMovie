import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./AllMovie.css"
import { useNavigate } from 'react-router-dom';


const AllMovie = () => {
  const Api_AllMovies = `https://api.themoviedb.org/3/discover/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&page=20`;
  const ApiImg ="https://image.tmdb.org/t/p/w500/"

  const navigate = useNavigate();

    const [allMovies, setAllMovies] = useState();
    useEffect (() => {
        axios
        .get(Api_AllMovies)
        .then((res) => {
            setAllMovies(res.data.results)
            console.log(res)
        })
        .catch((err) => console.log(err));
    }, [Api_AllMovies]);

    const getID = (id) => {
      navigate(`/Detail/${id}`);
  };

  return (
    <div>
      <div className='AllTitle'>
                <h1>Discover Movie</h1>
            </div>
      <div className="AllMovieWrap">
      {allMovies? (
        allMovies.map((item) => {
          return (
            <div onClick={() => getID(item.id)} key={item.id} className='allMovieItem'>
                <img className='AllMovieImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                <h2 className='AllMovieTitle'>{item.title}</h2>
            </div>
          );
        })
      ) : (
        <h2>Loading</h2>
      )}
      </div>
    </div>
  )
}

export default AllMovie