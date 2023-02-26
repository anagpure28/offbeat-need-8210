import React from 'react'
import FirstCarousel from './Carousel';
import "./Product.css"
import Carousel100 from '../HomePage/Carousal100';
import CarouselBelieve from '../HomePage/CarouselBelieve';
import CarouselPaper from '../HomePage/CarouselPaper';
import CarouselWorld from '../HomePage/CarouselWorld';
import HoverContainer2 from '../HomePage/HoverContainer2';
import SecondCarousel from './Carousel2';
import ThirdCarousel from './Carousel3';

const Product = () => {
  return (
    <div style={{marginTop:"10px", margin:"auto" ,width:"90%"}}>
      <h2 style={{fontFamily: "Poynter,Georgia,serif",marginTop:"20px", fontSize:'40px', fontWeight:"500"}}>New Book Releases</h2>
      <div className='flex' style={{marginTop:"10px"}}>
        <div className='flex-div2'>
          <div className='div'>
            <h3 className='h3'>Bestselling New Releases</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <FirstCarousel />
          </div>
          <div className='div'>
            <h3 className='h3'>Paperback New Releases</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <Carousel100 />
          </div>
          <div className='div'>
            <h3 className='h3'>New From Rebecca Makkai</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>Shop Now</a>
          </div>
          <div className='flex' style={{width:"90%",margin:"auto", marginTop:"50px"}}>
            <div className='display' style={{width:"30%"}}>
              <img width="50%" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593490143_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="" />
            </div>
            <div style={{width:"65%", textAlign:"left"}}>
              <h5 style={{fontSize:"20px", fontWeight:"500"}}>QUICK ADD I Have Some Questions for You</h5>
              <p>by <span style={{color:"green"}}>Rebecca Makkai</span></p>
              <p>Bodie Kane has always been plagued by questions about a murder that rocked her boarding school in 1995… When she returns to campus as a professor, the doubt she has kept at bay about the investigation comes creeping back. Does she know something that could crack the case wide open? An enthralling mystery, an interrogation of the past, an entrancing campus novel, I Have Some Questions for You is a propulsive page-turner.Bodie Kane has always been plagued by questions about a murder that rocked her boarding school in 1995… When she returns to campus as a professor, the doubt she has kept at bay about the investigation comes creeping back. Does she know something that could crack the case wide open? An enthralling mystery, an interrogation of the past, an entrancing campus novel, I Have Some Questions for You is a propulsive page-turner.</p>
            </div>
          </div>
          <HoverContainer2 />
          <div className='div'>
            <h3 className='h3'>What's New This Week</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <CarouselBelieve />
          </div>
          <div className='div'>
            <h3 className='h3'>Bestselling PaperBacks</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <ThirdCarousel />
          </div>
          <div className='div'>
            <h3 className='h3'>New in Fiction</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <CarouselPaper />
          </div>
          <div className='div'>
            <h3 className='h3'>New Fantacy Releases</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <CarouselWorld />
          </div>
          <div className='div'>
            <h3 className='h3'>Bestselling Fictions</h3>
            <a href="/allproducts" style={{fontSize:"14px", color:"blue", textDecoration: "underline"}}>See All</a>
            <SecondCarousel />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product