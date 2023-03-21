import React from 'react';


function ImageCard(props) {

    let style={
        height:'30vh',
        width:'22vw'
    }


    return (
        <div className='imageCardRender' style={{width:'22vw', height:'42vh'}}>
            <div className="card bg-dark text-white imgCard-card" style={style}>
            <img className="card-img imgCard-cardImg" src={props.src} alt="" style={style}/>
            <div className="card-img-overlay">
            <h5 className="card-title">{props.heading}</h5>
            </div>
            </div>
            <p className="card-text text-center imgCard-p" style={{fontWeight:'bold', color:'black', fontSize:'1.5rem', height:'4rem'}}>{props.desc}</p>
            {/* <div className="text-center"><button className="btn btn-primary" onClick={()=>{featuredRef.current.scrollIntoView({ behavior: "smooth" })}}>Shop Now </button></div> */}
            <div className="text-center"><button className="btn btn-primary imgCard-btn" onClick={()=>{props.scroll(props.idx)}}>Shop Now </button></div>
        </div>
    );
}

export default ImageCard;