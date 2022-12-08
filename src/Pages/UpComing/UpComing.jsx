import React, { useEffect } from 'react'
import "./UpComing.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUpComing } from '../../App/Counter/movieSlice';

const UpComing = () => {
    const ApiImg ="https://image.tmdb.org/t/p/w500/"
    const { upComing } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
      dispatch(getUpComing())
    }, [dispatch]);

    const getID = (id) => {
      navigate(`/Detail/${id}`);
  };

  return (
    <div>
      <div className='UpComingWrap bg-[#081548]'>
        <div className='UpTitle pt-[4rem] md:pt-[5rem] pb-[1rem] md:pb-[2rem] shadowUp fontCabin'>
            <h1 className='text-[2.2rem] md:text-[2.5rem] text-white font-extrabold'>
              UpComing Movie
            </h1>
        </div>
        <div className="UpMovieWrap pb-5 grid grid-cols-3 md:flex flex-row flex-wrap justify-center mx-[1rem] md:mx-[2rem]">
        {upComing? (
          upComing.map((item) => {
            return (
              <div 
                  onClick={() => getID(item.id)} key={item.id} 
                  className='UpMovieItem flex justify-center items-center flex-col cursor-pointer rounded-2xl bg-[#0d1d5f] m-[0.5rem] p-[0.5rem] trnsitionAll borderItems2 hover:shadowCard'>
                  <img className='UpMovieImg md:h-[15rem] mx-[0.5rem] w-[10rem] flex items-center rounded-xl' 
                    src={ApiImg + `${item.poster_path}`} 
                    alt="PosterMovie" />
                  <h2 className='UpMovieTitle fontCabin hidden md:block text-white text-base w-40 py-2 truncate text-[1rem] font-semibold shadowH2'>
                    {item.title}
                  </h2>
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