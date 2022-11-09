import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"

const HomePage = () => {
    const ApiMovie = 'https://api.themoviedb.org/3/movie/popular?api_key=9cc1bc46ae7070abb9a43667213d613a&page=8';
    const ApiHeader = 'https://api.themoviedb.org/3/movie/popular?api_key=9cc1bc46ae7070abb9a43667213d613a&page=2';
    // const ApiHeader = 'https://api.themoviedb.org/3/movie/474350?api_key=9cc1bc46ae7070abb9a43667213d613a'
    const ApiGendre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US'
    const ApiImg ="https://image.tmdb.org/t/p/w500/"

    const [header, setHeader] = useState();
    const [movie, setMovie] = useState();
    const [genre, setGenre] = useState();
    const [seacrh, setSeacrh] = useState();

    const navigate = useNavigate();
    
    useEffect(() => {
        axios
        .get(ApiHeader)
        .then((res) => {
            setHeader(res.data.results.slice(0, 1))
            console.log(res);
        })
        .catch ((err) => console.log(err))
    }, [ApiHeader]);
    
    // useEffect(() => {
    //     axios
    //     .get(ApiMovie)
    //     .then((res) => {
    //         setMovie(res.data.results.slice(0, 10))
    //         console.log(res);
    //     })
    //     .catch ((err) => console.log(err))
    // }, [ApiMovie]);

    useEffect(() => {
        axios
        .get(ApiMovie)
        .then((res) => {
            setMovie(res.data.results.slice(0, 10))
            console.log(res);
        })
        .catch ((err) => console.log(err))
    }, [ApiMovie]);
    
    useEffect(() => {
        axios
        .get(ApiGendre)
        .then((res) => {
            setGenre(res.data.genres)
            console.log(res);
        })
        .catch ((err) => console.log(err))
    }, [ApiGendre]);

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
    
    // const

  return (
    <div>
            <div className="homeHeader h-[80vh]">
                {header && 
                header.map((e) => {
                    return ( 
                        <div  className='HeaderWrap'>
                            <img 
                                className='HeaderImg h-[80vh] w-full' 
                                src={ApiImg + `${e.backdrop_path}`} 
                                alt="Background_Detail" />
                            <div className='headerDec z-10 w-full h-[75%]'>
                                <h2 className='HeaderTitle text-[5rem]'>
                                    {e.title}
                                </h2>
                                <a className='HeaderClick text-[1rem] w-[8%] cursor-pointer ' 
                                    href={`${e.homepage}`} target="blank"
                                    >
                                    Click Here
                                </a>
                            </div>
                        </div>
                    );
                })}
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
                        className='searchItem p-2 w-[15rem] rounded-2xl' 
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
            <div className='popularWrap m-2'>
                {movie &&
                movie.map((item) => {
                    return (
                        <div 
                            className='popularItem cursor-pointer m-2 rounded-2xl p-2'
                            onClick={() => getID(item.id)} key={item.id} >
                        <img className='popularImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                        <h2 className='popularTitle text-white text-base'>
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