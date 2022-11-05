import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Genres.css"

const Genres = () => {
    const { genres } = useParams();
    const navigate = useNavigate();

    const ApiGendre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US';
    const ApiSeacrh = 'https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query=' + genres;
    const ApiImg = 'https://image.tmdb.org/t/p/w500/';

    const [genre, setGenre] = useState();
    const [seacrhGe, setSeacrhGe] = useState();

    useEffect(() => {
        axios
        .get(ApiGendre)
        .then((res) => {
            setGenre(res.data.genres)
            console.log(res);
        })
        .catch ((err) => console.log(err))
    }, [ApiGendre]);
   
    useEffect(() => {
        axios
        .get(ApiSeacrh)
        .then((res) => {
            setSeacrhGe(res.data.results)
            console.log(res);
        })
        .catch ((err) => console.log(err))
    }, [ApiSeacrh]);

    const getGendres = (genres) => {
        navigate(`/Genres/${genres}`);
      };

    const getID = (id) => {
        navigate(`/Detail/${id}`);
    };


  return (
    <div>
        <div className='GenrePageWrap'>
            
            <div className='genreWrap'>
                <div className="genreTitle">
                    <h2>Genres</h2>
                </div>
                <div className="genreItem">
                    {genre &&
                    genre.map((e) => (
                        <button key={e.id} onClick={() => getGendres(e.name.toLowerCase())} className='genreBtn' >
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='genreMovie'>
                <div className='genreMovieTitle'>
                    <h1 className="text-[2em]">Showing Movies With "{genres.replace(genres.charAt(0), genres.charAt(0).toUpperCase())}" Genre</h1>
                </div>
                <div className='genreMovieWrap'>
                    {seacrhGe?(
                        seacrhGe.map((item) => {
                            return (
                                <div onClick={() => getID(item.id)} key={item.id} className='genreMovieItem'>
                            <img className='genreMovieImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                            <h2 className='genreMovieTitle'>{item.title}</h2>
                            </div>
                        );
                    })
                    ) : (
                        <h2>Loading</h2>
                        )
                    }
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Genres