import React , {useContext, useState , useEffect} from 'react';
import '../styles/OrderDetails.css';
import { CartAllItems } from './Context/CartContext';

function OrderDetails(props) {

    const cartItemHandle = useContext(CartAllItems);
    let {itemCount,totalQty,totalPrice,updateQty, resetCart} = cartItemHandle;

    let[cnt,setCnt] = useState(itemCount);

    let[payment, updatePayment] = useState('');

    useEffect(()=>{
            setCnt(itemCount);
    },[itemCount])

    // function to place the order
    function placeOrder(){
        if(payment===''){
            alert('Please Select the Payment Method!')
        }
        else{
            resetCart();
            window.location.replace('/placeOrder')
        }
    }

    return (
        <div className='orderDetails'>
            <h4 className='text-center'>Order Details : </h4>
            <div className="details" style={{display:'flex',flexDirection:'column'}}>
                <div className="totalItems text-center">Total Items : {cnt}</div>
                <div className="quantity text-center">Total Quantity : {totalQty}</div>
                <br />
                <div className="total text-center"><b>Total Price : {totalPrice}$</b></div>
                <br />
                <select name="payment" id="payment" onChange={(e)=>{updatePayment(e.target.value)}}>
                    <option value="" className='text-center'>Select Payment Method</option>
                    <option value="debit" className='text-center'>Debit Card</option>
                    <option value="upi" className='text-center'>UPI</option>
                    <option value="net" className='text-center'>Net Banking</option>
                </select>
                <br />
                <br />
                <button className="btn btn-primary" onClick={()=>placeOrder()}>Place Order</button>
            </div>
        </div>
    );
}

export default OrderDetails;
