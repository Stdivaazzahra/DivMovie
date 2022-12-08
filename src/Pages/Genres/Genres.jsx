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
            
        <div className='genreWrap bg-[#27496d] w-[25%] md:w-[15%]'>
                <div className="genreTitle text-white text-[1.2rem] md:text-3xl font-bold">
                    <h2 className='py-[1.5rem] md:py-[2rem]'>
                        Genres
                    </h2>
                </div>
                <div className="genreItem">
                    {genre &&
                    genre.map((e) => (
                        <button key={e.id} onClick={() => getGendres(e.name.toLowerCase())} 
                        className='genreBtn  text-white hover:text-[#00a8cc] cursor-pointer m-[0.5rem] text-[0.9rem] md:text-[1rem]'>
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='genreMovie bg-[#162447]  w-[75%] md:w-[85%]'>
                <div className='genreMovieTitle pt-6 pb-2'>
                    <h1 className="text-white text-[1.3rem] md:text-[2rem]">
                        Showing Movies With "{genres.replace(genres.charAt(0), genres.charAt(0).toUpperCase())}" Genre
                    </h1>
                </div>
                <div className='genreMovieWrap grid grid-cols-2 md:flex flex-row flex-wrap justify-center m-[0.5rem] md:mx-[5rem]'>
                    {searchGen?(
                        searchGen.map((item) => {
                            return (
                                <div onClick={() => getID(item.id)} key={item.id} className='genreMovieItem'>
                            <img className='genreMovieImg w-20 md:w-40' 
                                src={ApiImg + `${item.poster_path}`}
                                alt="PosterMovie" />
                            <h2 className='genreMovieTitle hidden md:block text-white text-base w-40 py-2 truncate text-[1rem]'>
                                {item.title}
                            </h2>
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