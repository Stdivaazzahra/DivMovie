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
    <div className='bg-slate-100'>
      <div className='AllTitle pt-[20%] md:pt-[5%]'>
          <h1 className='text-[2.2rem] md:text-[2.5rem] text-[#081548] pb-[1.5rem] font-extrabold fontCabin shadow1'>
              Discover Movie
          </h1>
      </div>
      <div className="AllMovieWrap pb-5 grid grid-cols-3 md:flex flex-row flex-wrap justify-center mx-[1rem] md:mx-[2rem]">
      {discover? (
        discover.map((item) => {
          return (
            <div onClick={() => getID(item.id)} key={item.id} 
            className='allMovieItem flex justify-center items-center flex-col cursor-pointer rounded-2xl bg-[#081548] m-[0.5rem] p-[0.5rem] borderItems2 trnsitionAll hover:shadowCard2'>
                <img className='AllMovieImg mx-[0.5rem] md:h-[15rem] w-[10rem] flex items-center rounded-xl' 
                  src={ApiImg + `${item.poster_path}`} 
                  alt="PosterMovie" />
                <h2 className='AllMovieTitle hidden md:block text-white text-base w-40 py-2 truncate text-[1rem] fontCabin shadowH2'>
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