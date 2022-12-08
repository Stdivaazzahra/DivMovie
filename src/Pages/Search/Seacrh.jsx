import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./Seacrh.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../App/Counter/searchSlice';

const Seacrh = () => {
    const ApiImg = 'https://image.tmdb.org/t/p/w500/';
    const { name } = useParams();
    const { search } = useSelector((state) => state.search);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearch(name))
      }, [dispatch, name]);

    const getID = (id) => {
        navigate(`/Detail/${id}`);
    };

  return (
    <div>
        <div className='SearchWrap w-full flex flex-row flex-wrap'>
            <div className='SearchMovie w-full bg-[#162447]'>
                <div className='SeacrhTitle'>
                    <h1 className="text-[2.2rem] md:text-[2.5rem] text-white font-extrabold">
                        Search Result "{name}"
                    </h1>
                </div>
                <div className='searchMovieWrap grid grid-cols-3 md:flex flex-row flex-wrap justify-center mx-[1rem] md:mx-[2rem]'>
                    {search?(
                        search.map((item) => {
                            return (
                            <div onClick={() => getID(item.id)} key={item.id} 
                                className='SeacrhMovieItem flex justify-center items-center flex-col m-[0.5rem] p-[0.5rem] cursor-pointer rounded-2xl'>
                                <img className='SeachMovieImg mx-[0.5rem] w-[10rem] flex justify-center items-center rounded-xl' 
                                    src={ApiImg + `${item.poster_path}`} 
                                    alt="SearchMovie" />
                                <h2 className='SearchMovieTitle hidden md:block text-white text-[1rem] font-extrabold w-40 truncate'>
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

export default Seacrh