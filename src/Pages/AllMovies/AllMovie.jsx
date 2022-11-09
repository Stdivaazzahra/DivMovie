import React, { useEffect } from 'react'
import "./AllMovie.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscover } from '../../App/Counter/movieSlice';


const AllMovie = () => {
  const ApiImg ="https://image.tmdb.org/t/p/w500/"
  const { discover } = useSelector((state) => state.movies);
  const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getDiscover())
    }, [dispatch]);


    const getID = (id) => {
      navigate(`/Detail/${id}`);
  };

  return (
    <div>
      <div className='AllTitle text-[#1f4068] text-[2.5rem] font-extrabold'>
                <h1>Discover Movie</h1>
            </div>
      <div className="AllMovieWrap pb-5">
      {discover? (
        discover.map((item) => {
          return (
            <div onClick={() => getID(item.id)} key={item.id} 
            className='allMovieItem cursor-pointer rounded-2xl bg-[#27496d]'>
                <img className='AllMovieImg' src={ApiImg + `${item.poster_path}`} alt="PosterMovie" />
                <h2 className='AllMovieTitle text-white text-[1rem] font-extrabold'>
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
  )
}

export default AllMovie