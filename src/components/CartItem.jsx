import React, { useEffect,  useContext, useState} from 'react';
import '../styles/CartItem.css';
import { CartAllItems } from './Context/CartContext';

function CartItem(props) {

    const cartItemHandle = useContext(CartAllItems)
    let {CartItems,updateQty,totalQty} = cartItemHandle;

    // let [setCount]=useState(props.quantity);

    let[myCartItems,setMyCartItems] = useState(CartItems);

    // useEffect(()=>{
    //     setMyCartItems(props.cartShow);
    // },[props.cartShow])

    useEffect(()=>{
        console.log("qty increased")
        // setCount(props.quantity)
        setMyCartItems(CartItems);
        console.log(totalQty);
        // eslint-disable-next-line
    },[CartItems])

    // const reducer = (state, action) => {
    //     switch (action.type) {
    //       case "Increment":
    
    //         // CartUpDateItems((prevData) => {
    //         //   return prevData.map((item, i) => {
    //         //     if (i === action.id) {
    //         //       return {
    //         //         ...item,
    //         //         quantity: item.quantity + 1
    //         //       };
    //         //     } else {
    //         //       return item;
    //         //     }
    //         //   });
    //         // });
    //         let newQty = CartItems[action.id].quantity+1;

    //         // updateQty(action.id, newQty)
            
    //         return {
    //           products: CartItems
    //         };
    
    //       case "Decrement":
    
    //         // CartUpDateItems((prevData) => {
    //         //   return prevData.map((item, i) => {
    //         //     if (i === action.id) {
    //         //       return {
    //         //         ...item,
    //         //         quantity: item.quantity - 1
    //         //       };
    //         //     } else {
    //         //       return item;
    //         //     }
    //         //   });
    //         // });

    //         let newQty1 = CartItems[action.id].quantity-1;
    //         if(newQty1>0){
    //             // updateQty(action.id, newQty1)
    //         }
    
    //         return {
    //           products: CartItems
    //         };
    //       default:
    //         return state;
    //     }
    //   };

    // const[state,dispatch] = useReducer(reducer,{
    //     products: CartItems 
    // });

    function handleInc(id,qty){
        let newQty = qty+1;

        updateQty(id,newQty)
        console.log("alert inc")
    }

    function handleDec(id,qty){
        let newQty = qty-1;

        if(newQty>0){
            updateQty(id,newQty)
        }
        console.log("alert dec")
    }

    function removeFromCart(id){

        let cn = window.confirm('Delete this item from cart ?');

        if(cn){
            updateQty(id,0);
        }
    }

    return (
        <>
        {myCartItems.map((e,i)=>{
            return(
                <div className='cart-item' key={e.name}>
        <div className="itemDets">

        <div className="prodImg">
                <img src={e.image} alt="" className="itemImg" />
            </div>

        <div className="nameDets">
            <div className="itemName">{e.name}</div>
            <div className='text-center'>Price : ({e.price}{e.currency}) </div>
            <br />
            </div>

            <div className='prodDetails'>
            <div><b>Product Details : </b></div>
            {e.details.map((detail,id)=>{
                return(
                <div key={id}>{detail}</div>
                )
            })}
            </div>

            </div>
            <div className="qtyHandler">
                {/* <button className='decreaseQty text-center' onClick={()=>{dispatch({type: "Decrement", payload: e.price, id: e.id})}}>-</button> */}
                <button className='decreaseQty text-center' onClick={()=>{handleDec(i,e.quantity)}}>-</button>
                <span className="qty text-center"> Qty : {e.quantity}</span>
                {/* <button className='increaseQty text-center' onClick={()=>{dispatch({type: "Increment", payload: e.price, id: e.id})}}>+</button> */}
                <button className='increaseQty text-center' onClick={()=>{handleInc(i, e.quantity)}}>+</button>
            </div>

            <div className="deleteButton" style={{cursor:'pointer'}} onClick={()=>{removeFromCart(e._id)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            </div>
        </div>
            )
            
        })}
        
        </>
    );
}

export default CartItem;