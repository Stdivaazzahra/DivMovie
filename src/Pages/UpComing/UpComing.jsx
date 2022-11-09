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
      <div className='UpComingWrap bg-[#162447] pb-5'>
        <div className='UpTitle text-white text-[2.5rem] font-extrabold'>
                  <h1>UpComing Movie</h1>
              </div>
        <div className="UpMovieWrap">
        {upComing? (
          upComing.map((item) => {
            return (
              <div 
                  onClick={() => getID(item.id)} key={item.id} 
                  className='UpMovieItem bg-[#27496d] cursor-pointer rounded-2xl'>
                  <img className='UpMovieImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                  <h2 className='UpMovieTitle text-white text-[1rem] font-extrabold'>{item.title}</h2>
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