import React from 'react'
import { nextSlide,prevSlide,dotSlide } from '../../features/slices/SliderSlice'
import  { useSelector, useDispatch } from 'react-redux'
import {sliderData} from '../../assets/data/DummyData'
const Slider = () => {
    const slideIndex = useSelector((state) => state.slider.value);
    console.log("slideIndex",slideIndex);
    const dispatch = useDispatch();
  return (
    <div className='relative pb-4'>
    <div>
        {sliderData.map((item,index)=>{
            return(
                <div key={item.id} className={parseInt(item.id)=== slideIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
                <div>
                {parseInt(item.id)=== slideIndex && (
                    <img src={item.img} alt="shoes" />
                )}
                </div>
                <div>
                    <p className='text-white text-4xl font-sans font-bold tracking-normal leading-none'>{parseInt(item.id)=== slideIndex && item.text}</p>
                </div>
                </div>
            )
        })}
    </div>
    <div className='flex absolute bottom-10 left-[45%]'>
    {sliderData.map((dot)=>{
        return (
            <div className='mr-4' key={index}>
            <div className=''></div>
            </div>
        )
    })}
    </div>
        <button onClick={()=>dispatch(nextSlide(slideIndex + 1))}>Next</button>
        <button onClick={()=>dispatch(prevSlide(slideIndex - 1))}>Previous</button>
    </div>
  )
}

export default Slider