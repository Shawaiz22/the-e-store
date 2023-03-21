import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function PlaceOrder(props) {

    let success = useRef("");
    let animation = useRef("");

    // document.querySelector('#circularAnimation').classList.remove('dn')
    // document.querySelector('#orderSuccess').classList.add('dn')

    // success.current.classList.remove('dn');
    // animation.current.classList.add('dn');

    console.log(success.current);

    setTimeout(()=>{
        success.current.classList.add('dn');
        animation.current.classList.remove('dn');
    },2000)

    setTimeout(()=>{
        // document.querySelector('#circularAnimation').classList.remove('dn')
        // document.querySelector('#orderSuccess').classList.remove('dn')
        // success.current.classList.add('dn');
        // animation.current.classList.remove('dn');
        // console.log(success.current)

        success.current.classList.remove('dn');
        animation.current.classList.add('dn');
    },5000)

    return (
        <div style={{height:'100vh',maxHeight:'100vh',width:'100vw',maxWidth:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div id="circularAnimation" className='dn' ref={animation} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <img src="https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp" alt="" style={{width:'5rem'}}/>
                <h4 className="text-center">Please Wait While we Confirm your order</h4>
            </div>

            <div id="orderSuccess" className='dn' ref={success} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <img src="https://tse4.mm.bing.net/th?id=OIP.iEgHTVJVb3SgJK46ctqV_AAAAA&pid=Api&P=0" alt="" />
                <br />
                <Link to='/'> <button className="btn btn-primary">Continue Shopping</button>  </Link>
            </div>
        </div>
    );
}

export default PlaceOrder;