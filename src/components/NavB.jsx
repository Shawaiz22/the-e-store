import React , {useContext, useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
// import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import SearchBar from './SearchBar';
import '../styles/NavB.css';
import { Link } from 'react-router-dom';
import { CartAllItems } from './Context/CartContext';
import logo from '../assets/logo.png';

function NavB(props) {

    const cartItemHandle = useContext(CartAllItems);
    let {itemCount} = cartItemHandle;

    let[cnt,setCnt] = useState(itemCount);

    useEffect(()=>{
            setCnt(itemCount);
    },[itemCount])

    return (
        <nav className='navbar'>
            <div className="logo">
            <img src={logo} alt="" className='main-logo'/>
            <div className="text" style={{marginLeft:'5px'}}> The-E-Store</div>
            </div>

            <div className="mainNav">
            <SearchBar/>

            {/* {loginStatus ? <LoggedIn/> : <LoggedOut/>} */}
            {/* initially rendering only the loggedout component, will configure it in future to add the login and logout functionality */}
            <div className="rightNav">
            <LoggedOut/>

            <Link to={'/cart'} className="cartDiv btn btn-primary">
                {/* <Link to={'/cart'}><img src="" alt="" className="cartImg" />Cart</Link> */}
                <div >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </div>
                <div id='cartCount'>Cart : {cnt}</div>
            </Link>
            </div>
            </div>
        </nav>
    );
}

export default NavB;