 import React, { useState, useEffect, useRef } from 'react';
 import styled, {css} from 'styled-components/macro';
 import { Link } from 'react-router-dom';
 import {IoMdArrowRoundForward} from 'react-icons/io';
 import {IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';


 const SliderButtons = styled.div`
 position: absolute;
 bottom: 50px;
 right: 50px;
 display: flex;
 z-index: 10;
 `;

 const HeroSection = styled.section`
 height: 100vh;
 max-height: 1100px;
 position:relative;
 overflow:hidden;
 
 `;

 const HeroWrapper = styled.div`
 width: 100%;
 height:100%;
 display:flex;
 justify-content:center;
 align-items:center;
 overflow:hidden;
 position:relative;
 `;

 const HeroSlide = styled.div`
 z-index: 1;
 width: 100%;
 height:100%;
 `;
 const HeroSlider = styled.div`
 position: absolute;
 top:0;
 left:0;
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 
 `;
 const HeroImage = styled.img`
 position: absolute;
 top:0;
 left: 0;
 width: 100%;
 height: 100vh;
 object-fit: cover;
object-position: center center;
 `;
 const HeroContent = styled.div`
 position: relative;
 z-index: 10;
 max-width: 1600px;
 width: calc(100% - 100px);
 color: #fff;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 h2{
     font-size: clamp(1rem, 8vw, 3rem);
 }
 `;
 const Arrow = styled(IoMdArrowRoundForward)`
 
 `;
  
 const ArrowButtons = css`
 width: 50px;
 height: 50px;
 color: #fff;
 cursor: pointer;
 background: #000d1a;
 border-radius: 50px;
 padding: 10px;
 margin-right: 1rem;
 user-select: none;
 transition: 0.3s;

 &: hover{
     background: #fdb44d;
     transform: scale(1.05);
 }
 `;

 const PrevArrow = styled(IoMdArrowBack)`
 ${ArrowButtons}
 `;

 const NextArrow = styled(IoMdArrowForward)`
 ${ArrowButtons}
 `;

 export default function Hero({slides}){

     const [current, setCurrent ] = useState(0);
     const length = slides.length;
     const timeout = useRef(null);


     useEffect(() => {
         const nextSlide = () => {
             setCurrent((current) => ( current === length - 1 ? 0 : current + 1))
         }
         timeout.current = setTimeout(nextSlide, 5000)
       return () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
       };
     }, [current, length])

     const nextSlide = () => {
         setCurrent(current === length - 1 ? 0 : current + 1)
     }

     const prevSlide = () => {
         setCurrent(current === 0 ? length - 1 : current + 1)
     }
     return(
         <HeroSection>
             <HeroWrapper>
           
               {slides.map((slide, index) => {
                   return(
                       <HeroSlide key={index}>
                           {index === current &&  
                           <HeroSlider>
                           <HeroImage src={slide.image} alt={slide.alt}/>
                           <HeroContent> 
                               <h1>{slide.title}</h1>
                                  <p>{slide.price}</p>
                                 <Link to={slide.path}> <div className="btn-primary">{slide.label}
                                 <Arrow />
                                 </div></Link>
                           </HeroContent>
                       </HeroSlider> }
                           
                       </HeroSlide>
                   )
               })}
               <SliderButtons>
                   <PrevArrow onClick={prevSlide}/>
                   <NextArrow onClick={nextSlide}/>
               </SliderButtons>
             </HeroWrapper>
         </HeroSection>
     )

 }




