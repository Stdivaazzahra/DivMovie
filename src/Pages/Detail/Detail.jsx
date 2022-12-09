import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./Detail.css"
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getDetailCast } from '../../App/Counter/detailSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { BiStar } from 'react-icons/bi';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";


const Detail = () => {
  const ApiImg = 'https://image.tmdb.org/t/p/w500/';
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, cast } = useSelector((state) => state.detail)

  useEffect(() => {
    dispatch(getDetail(id))
    dispatch(getDetailCast(id))
  }, [dispatch, id]);

  return (
    <div>
      <div className="DetailMovie md:h-full mt-[13%] md:mt-0">

        <div className="detailWrap">
          {detail && (
            <div className="detailItem bg-slate-100">
              <img className='DetailImg h-auto md:h-screen w-full block md:absolute object-cover' 
                  src={ApiImg + `${detail?.backdrop_path}`}
                  alt="Background_Detail" />

              <div className='DetailDec md:h-[50%] w-full md:w-[80%] text-black md:text-white mt-2 md:mt-10 relative md:absolute ml-0 md:ml-[3rem] z-20 flex flex-row justify-start flex-wrap'>
                  <h2 className='DetailTitle fontCabin font-extrabold w-full mt-0 md:mt-[1rem] text-[2rem] md:text-[4rem] flex justify-start items-center md:shadowHeader px-[1rem] md:px-0'>
                    {detail?.title}
                  </h2>
                  <div className="detailText w-full md:w-[70%] flex flex-col px-[1rem] md:px-0 pb-[2rem] md:pb-0">
                      <h3 className='DetailRate fontCabin font-semibold flex flex-row items-center mb-[0.5rem] text-[1rem] md:text-[1.3rem] md:shadowDetail'>
                        <span className="start_icon">
                          <BiStar />
                        </span>
                        {detail?.vote_average.toFixed(1)}
                      </h3>
                      <h3 className='DetailGenre fontCabin font-semibold flex flex-row flex-wrap mb-[2rem] md:mb-[1rem] text-[1rem] md:text-[1.3rem]' 
                        key={detail?.id}>
                        {detail?.genres.map((e) => {
                        return (
                          <h3 key={e.id} 
                            className="genre mr-[1rem] md:mr-[2rem] flex flex-row md:shadowDetail">
                            | {e.name} |
                          </h3>
                        );
                      })}
                    </h3>
                      <p className='Overview text-[1rem] mb-[2rem] md:mb-[1rem] text-justify md:shadowDetail fontCabin font-semibold'>
                        {detail?.overview}
                      </p>
                  
                    <a className='DetailClick mt-0 md:mt-[1rem] w-[30%] md:w-[20%] p-[0.4rem] shadowButton text-white text-[1rem] cursor-pointer rounded-xl fontCabin font-semibold trnsitionAll borderButton shadowNavbar hover:borderItems2 bg-[#5e39f0] hover:bg-transparent' 
                        href={`${detail?.homepage}`} 
                        target="blank">
                          Click Here
                    </a>
                  </div>
            </div>
            </div>
          )}
        </div>

        <div className="cast hidden md:flex items-end md:h-screen top-[30rem]">
            <Swiper
            slidesPerView={6}
            spaceBetween={5.5}
            slidesPerGroup={1}
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
            modules={[Autoplay, EffectCoverflow, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <div className="castWrap h-screen flex flex-row flex-wrap justify-center">
                    {cast ? (
                      cast.map((e) => {
                        return (
                          <SwiperSlide>
                          <div className="castItem trnsitionAll rounded-2xl m-[0.5rem] p-[0.5rem] flex justify-center items-center flex-col z-20 hover:shadowCard">
                                <img className="castImg" 
                                  src={ApiImg + `${e.profile_path}`} 
                                  alt="IMG Cast" />
                              <div className="castText text-white text-[1rem] font-extrabold fontCabin shadowH2">
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
        
        <div className="cast flex md:hidden items-end h-fit md:h-screen top-[30rem] bg-slate-100">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
            <div className="castWrap h-screen flex flex-row flex-wrap justify-center">
                    {cast ? (
                      cast.map((e) => {
                        return (
                          <SwiperSlide>
                          <div className="castItem trnsitionAll rounded-2xl m-[0.5rem] p-[0.5rem] flex justify-center items-center flex-col z-20 hover:shadowCard">
                                <img className="castImg" 
                                  src={ApiImg + `${e.profile_path}`} 
                                  alt="IMG Cast" />
                              <div className="castText text-black text-[0.7rem] font-extrabold fontCabin">
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