import React, { useContext } from 'react';
import { Items } from './Context/ItemContext';
import { CartAllItems } from './Context/CartContext';

function ItemCards(props) {

    // using context for all the items in the store
    const itemHandle = useContext(Items);
    let { updateItemQty } = itemHandle;

    // using context for cart items 
    const cartItemHandle = useContext(CartAllItems);
    let {addToCart} = cartItemHandle;

    // function to update the quantity of a product on change

    function updateProductCount(id,newQty){

        updateItemQty(id,newQty)
    }
    


    if (!props.Items) {
        return <div>Loading...</div>;
      }

    return (


        <div className='itemsDivBox' style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
        {props.Items.map((e,index)=>{
            return (
                <div className="card" style={{ width: '18rem', margin: '10px' }} key={e.name}>
            <img className="card-img-top" src={e.image} alt="" style={{width:'13rem',height:'10rem',alignSelf: 'center'}}/>
            <div className="card-body">
                <h5 className="card-title text-center">{e.name}</h5>
                <div className="card-text text-center">

                    <details>
                    <summary>See Details</summary>
                    {e.details.map((e,i)=>{
                        return(
                        <div key={i}>
                        {e} 
                        <br />
                        </div>
                        )
                    })}
                    </details>
                    

                
                    <div className="price">Price : {e.price}{e.currency}</div>
                    <br /> Qty :
                    <select name="qty" id="qty" className='ml-3' onChange={(val) => { updateProductCount(e._id,parseInt(val.target.value)) }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <br />
                <div className='text-center'>
                    {/* <button className="btn btn-primary mr-3" >Buy Now</button> */}
                    <button className="btn btn-primary" onClick={()=>{addToCart(props.Items[index])}}>Add to Cart</button>
                </div>
                {/* <Link></Link> */}
            </div>
        </div>
            )            
        })}
        </div>
        

    );
}

export default ItemCards;