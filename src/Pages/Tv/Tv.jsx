import React, { useEffect } from 'react'
import "./Tv.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTV } from '../../App/Counter/movieSlice';

const Tv = () => {
    const ApiImg ="https://image.tmdb.org/t/p/w500/"
    const { tv } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getTV())
    }, [dispatch]);

    const getID = (id) => {
      navigate(`/Detail/${id}`);
  };

  return (
    <div>
      <div className='TvShowTitle pt-[20%] md:pt-[5%]'>
          <h1 className='text-[#0d1d5f] text-[2.2rem] md:text-[2.5rem] pb-[1.5rem] font-extrabold shadow1 fontCabin'>
            Tv Shows
          </h1>
        </div>
      <div className="TvWrap pb-5 grid grid-cols-3 md:flex flex-row flex-wrap justify-center mx-[1rem] md:mx-[2rem]">
      {tv? (
        tv.map((item) => {
          return (
            <div onClick={() => getID(item.id)} key={item.id} 
                className='TvItem flex justify-center items-center flex-col cursor-pointer rounded-2xl m-[0.5rem] p-[0.5rem] borderItems3 trnsitionAll hover:shadowCard'>
                <img className='TvImg mx-[0.5rem] w-[10rem] flex items-center rounded-xl' 
                  src={ApiImg + `${item.poster_path}`} 
                  alt="PosterTv" />
                <h2 className='TvTitle hidden md:block text-[#0d1d5f] text-base w-40 py-2 truncate text-[1rem] font-semibold fontCabin shadowTV'>
                  {item.name}
                  </h2>
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