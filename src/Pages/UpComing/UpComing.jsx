import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./UpComing.css"
import { useNavigate } from 'react-router-dom';

const UpComing = () => {
    const Api_UpMovie='https://api.themoviedb.org/3/movie/upcoming?api_key=9cc1bc46ae7070abb9a43667213d613a&page=2'
    const ApiImg ="https://image.tmdb.org/t/p/w500/"

    const [upMovies, setUpMovies] = useState();
    const navigate = useNavigate();

    useEffect (() => {
        axios
        .get(Api_UpMovie)
        .then((res) => {
            setUpMovies(res.data.results)
            console.log(res)
        })
        .catch((err) => console.log(err));
    }, [Api_UpMovie]);

    const getID = (id) => {
      navigate(`/Detail/${id}`);
  };

  return (
    <div>
      <div className='UpComingWrap'>
        <div className='UpTitle'>
                  <h1>UpComing Movie</h1>
              </div>
        <div className="UpMovieWrap">
        {upMovies? (
          upMovies.map((item) => {
            return (
              <div onClick={() => getID(item.id)} key={item.id} className='UpMovieItem'>
                  <img className='UpMovieImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                  <h2 className='UpMovieTitle'>{item.title}</h2>
              </div>
            );
          })
        ) : (
          <h2>Loading</h2>
        )}
        </div>
      </div>
    </div>
  )
}

export default UpComing