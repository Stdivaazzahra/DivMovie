import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenre, getSearchGen } from '../../App/Counter/genresSlice';
import "./Genres.css"

const Genres = () => {
    const ApiImg = 'https://image.tmdb.org/t/p/w500/';
    const { genre, searchGen } = useSelector((state) => state.genre);
    const { genres } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenre())
      }, [dispatch]);
     
      useEffect(() => {
        dispatch(getSearchGen(genres))
      }, [dispatch, genres]);

    const getGendres = (genres) => {
        navigate(`/Genres/${genres}`);
      };

    const getID = (id) => {
        navigate(`/Detail/${id}`);
    };

  return (
    <div>
        <div className='GenrePageWrap'>
            
            <div className='genreWrap w-[15%] bg-[#27496d]'>
                <div className="genreTitle text-white text-3xl font-bold mt-5">
                    <h2>Genres</h2>
                </div>
                <div className="genreItem">
                    {genre &&
                    genre.map((e) => (
                        <button
                             key={e.id} onClick={() => getGendres(e.name.toLowerCase())} 
                            className='genreBtn text-white cursor-pointer' >
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='genreMovie bg-[#162447] w-[85%]'>
                <div className='genreMovieTitle pb-2'>
                    <h1 className="text-[2em]">Showing Movies With "{genres.replace(genres.charAt(0), genres.charAt(0).toUpperCase())}" Genre</h1>
                </div>
                <div className='genreMovieWrap '>
                    {searchGen?(
                        searchGen.map((item) => {
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