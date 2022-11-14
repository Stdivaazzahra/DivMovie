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
                            <div className='headerDec z-10 w-full h-[75%]'>
                                <h2 className='HeaderTitle text-[5rem]'>
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


        <div className='MovieWrap w-full'>
            
            <div className='genreWrap bg-[#27496d] w-[15%]'>
                <div className="genreTitle text-white text-3xl font-bold">
                    <h2>Genres</h2>
                </div>
                <div className="genreItem">
                    {genre &&
                    genre.map((e) => (
                        <button key={e.id} onClick={() => getGendres(e.name.toLowerCase())} 
                        className='genreBtn text-white cursor-pointer'>
                            {e.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='popularMovie bg-[#162447] w-[85%]'>
                
                <div className="seacrhWrap">
                    <form 
                        onSubmit={(e) => {
                        e.preventDefault();
                        SearchMovie(seacrh);
                        }}
                        className='searchItem p-2 w-[20rem] mt-5 rounded-2xl text-white' 
                    >
                        <input onChange={(e) => setSeacrh(e.target.value)} value={seacrh} type="text" placeholder='Search'/>
                        <button type="submit">
                            <BiSearchAlt className='SearchBtn'/>
                        </button>
                    </form>
                </div>

            <div className='popularTitle'>
                <h1>Popular Movie</h1>
            </div>
            <div className='popularWrap'>   
                {movie &&
                movie.map((item) => {
                    return (
                        <div 
                            className='popularItem cursor-pointer m-2 rounded-2xl p-2'
                            onClick={() => getID(item.id)} key={item.id} >
                        <img className='popularImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                        <h2 className='popularTitle text-white text-base w-40 py-2'>
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