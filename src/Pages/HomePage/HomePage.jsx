import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"
import { getHeader, getMovies } from '../../App/Counter/movieSlice';
import { getGenre } from '../../App/Counter/genresSlice';
import { reset } from '../../App/Counter/auth';

const HomePage = () => {
    const ApiImg ="https://image.tmdb.org/t/p/w500/"

    const [seacrh, setSeacrh] = useState();
    const { header, movie } = useSelector((state) => state.movies);
    const { genre } = useSelector((state) => state.genre);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMovies())
      }, [dispatch]);
      useEffect(() => {
        setTimeout(() => {
          dispatch(reset());
        }, 5000);
      }, [dispatch]);
      

    useEffect(() => {
        dispatch(getHeader())
      }, [dispatch]);
    
      useEffect(() => {
        dispatch(getGenre())
      }, [dispatch]);
    
    const getGendres = (genres) => {
        navigate(`/Genres/${genres}`);
      };
    
    const SearchMovie = (name) => {
        navigate(`/Search/${name}`);
        setSeacrh('');
    };
   
    const getID = (id) => {
        navigate(`/Detail/${id}`);
    };

  return (
    <div>
            <div className="homeHeader h-[80vh]">
                {header? (
                    header.map((header) => {
                        return ( 
                            <div  className='HeaderWrap'>
                            <img 
                                className='HeaderImg h-[80vh] w-full' 
                                src={ApiImg + `${header.backdrop_path}`} 
                                alt="Background_Detail" />
                            <div className='headerDec z-10 hidden md:flex flex-col justify-center items-end flex-wrap w-full h-[75%] text-white absolute'>
                                <h2 className='HeaderTitle text-[5rem] pr-[5rem]'>
                                    {header.title}
                                </h2>
                                <a className='HeaderClick text-[1rem] w-[8%] cursor-pointer ' 
                                    href={`${header.homepage}`} target="blank"
                                    >
                                    Click Here
                                </a>
                            </div>
                        </div>
                    );
                })
                ) : (
                    <h2>Loading ...</h2>
                )}
            </div>


        <div className='MovieWrap w-full flex flex-row flex-wrap'>
            
            <div className='genreWrap bg-[#27496d] w-[25%] md:w-[15%]'>
                <div className="genreTitle text-white text-[1.2rem] md:text-3xl">
                    <h2 className='py-[1.2rem] md:py-[2rem]'>
                        Genres
                    </h2>
                </div>
                <div className="genreItem flex flex-col">
                    {genre &&
                    genre.map((e) => (
                        <button key={e.id} onClick={() => getGendres(e.name.toLowerCase())} 
                        className='genreBtn text-white hover:text-[#00a8cc] cursor-pointer m-[0.5rem] text-[0.9rem] md:text-[1rem]'>
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='popularMovie bg-[#162447] w-[75%] md:w-[85%]'>
                
                <div className="seacrhWrap w-full flex justify-center md:justify-end pr-0 md:pr-[5rem]">
                    <form 
                        onSubmit={(e) => {
                        e.preventDefault();
                        SearchMovie(seacrh);
                        }}
                        className='searchItem p-2 w-[15rem] md:w-[20rem] mt-5 rounded-xl flex flex-row items-center justify-center text-white' 
                    >
                        <input 
                            onChange={(e) => setSeacrh(e.target.value)} 
                            value={seacrh} 
                            type="seacrh" 
                            placeholder='Search'/>
                        <button type="submit">
                            <BiSearchAlt className='SearchBtn'/>
                        </button>
                    </form>
                </div>

            <div className='popularTitle'>
                <h1 className='text-white text-[2rem] md:text-[3rem] py-[0.7rem] md:py[1.5rem]'>
                    Popular Movie
                </h1>
            </div>
            <div className='popularWrap m-[0.5rem] md:my-[2rem] md:mx-[6rem] grid grid-cols-2 md:flex flex-row flex-wrap justify-center'>   
                {movie &&
                movie.map((item) => {
                    return (
                        <div 
                            className='popularItem flex justify-center items-center flex-col cursor-pointer m-2 rounded-2xl p-2'
                            onClick={() => getID(item.id)} key={item.id} >
                            <img className='popularImg w-40 mx-[0.5rem] flex justify-center items-center rounded-xl' 
                                src={ApiImg + `${item.poster_path}`} 
                                alt="PosterMovie" />
                            <h2 className='popularTitle hidden md:block text-white text-base w-40 py-2 truncate text-[1rem]'>
                                {item.title}
                            </h2>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>


        
    </div>
  )
}

export default HomePage