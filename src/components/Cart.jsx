import React, {useContext, useEffect,useState} from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';
import OrderDetails from './OrderDetails';
import { CartAllItems } from './Context/CartContext';
import {Link} from 'react-router-dom';

function Cart(props) {

    const cartItemHandle = useContext(CartAllItems);
    const {CartItems,updateQty, itemCount} = cartItemHandle;


    let[myCart,setMyCart] = useState([]);

    // const [state, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //       case 'set_data':
    //         return {
    //           ...state,
    //           data: action.payload
    //         }
    //       default:
    //         return state
    //     }
    //   }, { data: [] });
    
    
      useEffect(() => {
        // if (cartItems && cartItems.length > 0) {
        //   dispatch({ type: 'set_data', payload: cartItems });
        // }
        // console.log(state.data)
        let data = JSON.parse(localStorage.getItem('AllCartItems'));
        setMyCart(data)
        
      }, []);

      // function to clear the cart 
      function clearAll(){

        let cn = window.confirm('All the Cart Items will be removed, Are you sure to continue ?');
        if(cn){
            updateQty(-1,1);
        } 
      }

      let clearAllBtn = <div className="text-center"><button className="btn btn-primary" onClick={()=>{clearAll()}}>Clear Cart</button></div> 
      let goBackBtn = <div className="text-center"><Link to='/'><button className="btn btn-primary" >Add Items</button></Link></div> 
    // useEffect(()=>{
        // console.log("using")
        // console.log(cartItemHandle.cartItems);
        // setMyCart((prev)=>{
            // return [...prev,cartItems];
        // })
        // if(cartItems && cartItems.length>0){
            // setMyCart(cartItems);
        // }

    // },[cartItems]);

    // console.log(cartItemHandle);
    console.log(myCart)
    // console.log(state.data)
    
    // if (!myCart) {
    //     // console.log(cartItemHandle);
    //     console.log(myCart);
    //     return <div>Loading...</div>;
    //   }
    let text = <h4 className='text-center'> Your Cart is Empty !!!</h4>
    return (
        <>
            <h1 className='text-center'> My Cart </h1>
        <div className="cartStructure">
        <div className='cart'>
            <div className="cartItems">
            <h4 className='text-center'>Items ({itemCount}) : </h4>
            
                {CartItems.length>0 ? clearAllBtn : ''}
                {CartItems.length>0 ? <CartItem cartShow={myCart}/> : text}

            </div>
        </div>
        {CartItems.length>0 ? <OrderDetails/> : goBackBtn}
        </div>
        </>
    );
}


export default Cart;