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
        <div className='GenrePageWrap flex flex-row flex-wrap w-full pt-[3em]'>
            
        <div className='genreWrap bg-[#081548] w-[25%] md:w-[15%]'>
                <div className="genreTitle ">
                    <h2 className='py-[1.2rem] md:py-[2rem] text-white text-[1.2rem] md:text-[2rem] shadowH1 font-extrabold fontCabin'>
                        Genres
                    </h2>
                </div>
                <div className="genreItem flex flex-col">
                    {genre &&
                    genre.map((e) => (
                        <button key={e.id} onClick={() => getGendres(e.name.toLowerCase())} 
                        className='genreBtn text-white hover:text-[#22cbc0] hover:shadowH2 cursor-pointer m-[0.5rem] text-[0.9rem] md:text-[1rem] font-semibold fontCabin trnsitionAll'>
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='genreMovie bg-[#0d1d5f]  w-[75%] md:w-[85%]'>
                <div className='genreMovieTitle'>
                    <h1 className="py-[1.2rem] md:py-[2rem] text-white text-[1.3rem] md:text-[2rem] font-extrabold fontCabin shadowH1">
                        Showing Movies With "{genres.replace(genres.charAt(0), genres.charAt(0).toUpperCase())}" Genre
                    </h1>
                </div>
                <div className='genreMovieWrap grid grid-cols-2 md:flex flex-row flex-wrap justify-center m-[0.5rem] md:mx-[5rem]'>
                    {searchGen?(
                        searchGen.map((item) => {
                            return (
                                <div 
                                    className='genreMovieItem flex justify-center items-center flex-col cursor-pointer m-2 rounded-2xl p-2 trnsitionAll hover:shadowCard borderItems'
                                    onClick={() => getID(item.id)} 
                                    key={item.id}>
                            <img className='genreMovieImg md:h-[15rem] w-40 mx-[0.5rem] flex justify-center items-center rounded-xl' 
                                src={ApiImg + `${item.poster_path}`}
                                alt="PosterMovie" />
                            <h2 className='genreMovieTitle hidden md:block text-white text-base w-40 py-2 truncate text-[1rem] font-semibold fontCabin shadowH2'>
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