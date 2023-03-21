import React from 'react';
// import ItemCard from './ItemCard';

import '../styles/EntryCarousel.css';
import ImageCard from './ImageCard';

function EntryCarousel(props) {


    // function for scroll
    function scrollMe(id){
        const element = document.getElementById(id+'');
        element.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div>
        <div className='carouselCustom' style={{background:'#faf1e1'}}>
        <h1 className="text-center" id='mainHead'>Welcome to The-E-Store</h1>
        <h3 className="text-center" id='mainSubHead'>The All in one Place for E-Logistics</h3>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    {/* <img className="d-block w-100" src="..." alt="First slide" /> */}
                    <div className="itemCard ">
                    <ImageCard scroll={scrollMe} title={'Men\'s wear'} desc={'A huge variety of Men\'s wear'} src={'https://tse1.mm.bing.net/th?id=OIP.AtLVDY2qcMsgnencL1WAkwHaHa&pid=Api&P=0'} idx={'menswear'}/>
                    <ImageCard scroll={scrollMe} tilte={'Grocery'} desc={'All your Grocery items'} src={'https://tse3.mm.bing.net/th?id=OIP.IseyU-JoKGcyPL1eOHNZ_QHaEd&pid=Api&P=0'}  idx={'grocery'}/>
                    <ImageCard scroll={scrollMe} title={'Electornics'} desc={'Huge variety of Electronics'} src={'https://tse1.mm.bing.net/th?id=OIP.oXm1FFVEU5zAu53JHBq6EQHaD8&pid=Api&P=0'}  idx={'electronics'}/>
                    </div>
                </div>
                <div className="carousel-item">
                    {/* <img className="d-block w-100" src="..." alt="Second slide" /> */}
                    <div className="itemCard ">
                    <ImageCard scroll={scrollMe} title={'Stationary'} desc={'Stationary Items for you'} src={'https://th.bing.com/th/id/OIP.peHeUHYqDBiKfSKQnbzHTgHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} idx={'stationary'}/>
                    <ImageCard scroll={scrollMe} tilte={'Cosmetics'} desc={'All your Desired Cosmetics'} src={'https://th.bing.com/th/id/OIP.mk742_jLh21r_mSwBxQmmAHaE6?w=274&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7'}  idx={'cosmetics'}/>
                    <ImageCard scroll={scrollMe} title={'Books'} desc={'All Range of Books'} src={'https://th.bing.com/th/id/OIP.1h1Agm9a2Y86_nYulGNLVAHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}  idx={'books'}/>
                    </div>
                </div>
                <div className="carousel-item">
                    {/* <img className="d-block w-100" src="..." alt="Third slide" /> */}
                    <div className="itemCard ">
                    <ImageCard scroll={scrollMe} title={'Sports'} desc={'Sports Kit Available'} src={'https://th.bing.com/th/id/OIP.yeW_vSQMGF6cXt-RFpjSNQHaF0?w=250&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'} idx={'sports'}/>
                    <ImageCard scroll={scrollMe} tilte={'Kids'} desc={'Items for your Kids'} src={'https://th.bing.com/th/id/OIP.ZyoYKB1t32_jqlpAAEcHEQHaFj?w=266&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'}  idx={'children'}/>
                    <ImageCard scroll={scrollMe} title={'HealthCare'} desc={'Health Care Items'} src={'https://th.bing.com/th/id/OIP.73-saNuYwVBO1A1ds5VSzgHaEu?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}  idx={'healthcare'}/>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
        </div>
    );
}

export default EntryCarousel;