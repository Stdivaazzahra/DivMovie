import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Seacrh.css"
import { useNavigate } from 'react-router-dom';

const Seacrh = () => {
    const { name } = useParams();

    const ApiSeacrh = 'https://api.themoviedb.org/3/search/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&query=' + name;
    const ApiImg = 'https://image.tmdb.org/t/p/w500/';

    const [seacrh, setSeacrh] = useState();
    const navigate = useNavigate();
   
    useEffect(() => {
        axios
        .get(ApiSeacrh)
        .then((res) => {
            setSeacrh(res.data.results)
            console.log(res);
        })
        .catch ((err) => console.log(err))
    }, [ApiSeacrh]);

    const getID = (id) => {
        navigate(`/Detail/${id}`);
    };

  return (
    <div>
        <div className='SearchWrap w-full'>
            <div className='SearchMovie w-full bg-[#162447]'>
                <div className='SeacrhTitle'>
                    <h1 className="text-[2.5rem] text-white font-extrabold">
                        Search Result "{name}"
                    </h1>
                </div>
                <div className='searchMovieWrap'>
                    {seacrh?(
                        seacrh.map((item) => {
                            return (
                            <div onClick={() => getID(item.id)} key={item.id} 
                                className='SeacrhMovieItem cursor-pointer rounded-2xl'>
                                <img className='SeachMovieImg' src={ApiImg + `${item.poster_path}`} alt="SearchMovie" />
                                <h2 className='SearchMovieTitle text-white text-[1rem] font-extrabold'>
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