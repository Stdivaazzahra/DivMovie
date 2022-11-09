import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Detail.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { BiStar } from 'react-icons/bi';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Detail = () => {
  const { id } = useParams();

  const ApiDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=9cc1bc46ae7070abb9a43667213d613a&language=en-US`;
  const ApiImg = 'https://image.tmdb.org/t/p/w500/';
  const ApiCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9cc1bc46ae7070abb9a43667213d613a`;

  const [detail, setDetail] = useState();
  const [cast, setCast] = useState();

  useEffect(() => {
    axios
    .get(ApiDetail)
    .then((res) => {
      setDetail(res.data)
        console.log(res);
    })
    .catch ((err) => console.log(err))
    }, [ApiDetail]);
  
    useEffect(() => {
    axios
    .get(ApiCast)
    .then((res) => {
      setCast(res.data.cast)
        console.log(res);
    })
    .catch ((err) => console.log(err))
    }, [ApiCast]);

  return (
    <div>
      <div className="DetailMovie h-full ">

        <div className="detailWrap">
          {detail && (
            <div className="detailItem">
              <img className='DetailImg h-screen w-full' 
                  src={ApiImg + `${detail?.backdrop_path}`}
                  alt="Background_Detail" />
              <div className='DetailDec h-2/4 w-4/5 text-white mt-10'>
                  <h2 className='DetailTitle w-full'>
                    {detail?.title}
                  </h2>
                  <div className="detailText w-[70%]">
                      <h3 className='DetailRate'>
                        <span className="start_icon">
                          <BiStar />
                        </span>
                        {detail?.vote_average.toFixed(1)}
                      </h3>
                      <h3 className='DetailGenre' key={detail?.id}>
                      {detail?.genres.map((e) => {
                        return (
                          <h3 key={e.id} className="genre">
                            | {e.name} |
                          </h3>
                        );
                      })}
                    </h3>
                      <p className='Overview'>
                        {detail?.overview}
                      </p>
                  
                  <a className='DetailClick bg-[#0c7b93] rounded-[0.7rem] p-[0.4rem] w-1/5 cursor-pointer' 
                      href={`${detail?.homepage}`} 
                      target="blank">
                        Click Here
                  </a>
                  </div>
            </div>
            </div>
          )}
        </div>

        <div className="cast">
            <Swiper
            slidesPerView={6}
            spaceBetween={5.5}
            slidesPerGroup={2}
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 5,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <div className="castWrap h-screen">
                    {cast ? (
                      cast.map((e) => {
                        return (
                          <SwiperSlide>
                          <div className="castItem rounded-[1rem]">
                              
                                <img className="castImg" src={ApiImg + `${e.profile_path}`} alt="IMG Cast" />
                              
                              <div className="castText">
                                <h2>{e.name}</h2>
                                <h3>" {e.character} "</h3>
                              </div>
                            </div>
                          </SwiperSlide>
                          );
                        })
                        ) : (
                          <h2>Loading...</h2>
                          )}
                  </div> 
            </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Detail