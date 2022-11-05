import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Tv.css"
import { useNavigate } from 'react-router-dom';

const Tv = () => {
    const Api_lateMovie='https://api.themoviedb.org/3/discover/tv?api_key=9cc1bc46ae7070abb9a43667213d613a&sort_by=popularity.desc&page=3'
    const ApiImg ="https://image.tmdb.org/t/p/w500/"

    const [lateMovies, setLateMovies] = useState();
    const navigate = useNavigate();

    useEffect (() => {
        axios
        .get(Api_lateMovie)
        .then((res) => {
            setLateMovies(res.data.results)
            console.log(res)
        })
        .catch((err) => console.log(err));
    }, [Api_lateMovie]);

    const getID = (id) => {
      navigate(`/Detail/${id}`);
  };

  return (
    <div>
      <div className='TvShowTitle'>
                <h1>Tv Shows</h1>
            </div>
      <div className="TvWrap">
      {lateMovies? (
        lateMovies.map((item) => {
          return (
            <div onClick={() => getID(item.id)} key={item.id} className='TvItem'>
                <img className='TvImg' src={ApiImg + `${item.poster_path}`} alt="PosterTv" />
                <h2 className='TvTitle'>{item.name}</h2>
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

export default Tv