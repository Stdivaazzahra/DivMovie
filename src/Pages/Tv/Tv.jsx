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
      <div className='TvShowTitle text-[#1f4068] text-[2.5rem] font-extrabold'>
                <h1>Tv Shows</h1>
            </div>
      <div className="TvWrap">
      {tv? (
        tv.map((item) => {
          return (
            <div onClick={() => getID(item.id)} key={item.id} 
                className='TvItem cursor-pointer rounded-2xl'>
                <img className='TvImg' src={ApiImg + `${item.poster_path}`} alt="PosterTv" />
                <h2 className='TvTitle text-[1rem] text-[#162447]'>
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