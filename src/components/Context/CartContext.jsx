import React,{createContext, useEffect, useState} from 'react';

const CartAllItems = createContext({
    CartItems:null,
    CartUpdateItems:()=>{},
    resetCart:()=>{},
    addToCart:()=>{},
    updateQty:()=>{},
    itemCount:0,
    totalQty:0,
    totalPrice:0
});

const CartContext = (props)=> {
    let [cartItemstate,updateCartItemstate]=useState([]);
    let[count,setCount]=useState(0);

    let[stats,setStats] = useState({noOfItems:0,totalQnty:0,totalAmt:0});

    useEffect(()=>{
        if(!cartItemstate){
            setCount(0);
            setStats({noOfItems:0,totalQnty:0,totalAmt:0});
        }

        else{
        
            if(cartItemstate.length>0){
                setCount(cartItemstate.length);
                setStats(updateVals(cartItemstate));
                localStorage.setItem('AllCartItems',JSON.stringify(cartItemstate));
                }
              
            }
        },[cartItemstate])

        useEffect(()=>{
            const unparsedItems = localStorage.getItem('AllCartItems');
            const items = unparsedItems ? JSON.parse(unparsedItems) : [];
            updateCartItemstate(items);
        },[])

    // utility function which gives the updated values for the cart item state
    const updateVals = (arr)=>{

        let obj={noOfItems:0,totalQnty:0,totalAmt:0}

        

        arr.forEach((e)=>{
            obj.noOfItems+=1;
            obj.totalQnty+=e.quantity;
            obj.totalAmt+=(e.quantity*e.price);
        })
        
        return obj;
    }

    async function addToCart(itemtoset){

        let contains = false;

        if(cartItemstate){
            console.log("checking")
            cartItemstate.map((e)=>{
                if(e.name===itemtoset.name && e.category===itemtoset.category){
                    contains=true;
                    return;
                }
            })
        }

        if(contains){
            console.log("returning")
            return;
        }
        else{
            try{
                await updateCartItemstate((prevValue)=>{
    
                    return[...prevValue,itemtoset];
                })
    
                 setValue();
    
                
            }
    
            catch(err){
                alert("Some error occured!")
            }
        }
        
        
    
    }

   async function setValue(){
    //    await localStorage.setItem('AllCartItems',JSON.stringify(cartItemstate));
       await alert("item added to cart");
    }


    const updateQuantity = (id,qty)=>{

        if(id===-1){
            updateCartItemstate([]);
            return;
        }

        if(qty===0){
            let newCartItems = cartItemstate.filter((e)=>{
                return e._id!==id;
            })

            updateCartItemstate(newCartItems);
            return;
        }

        let newCartItems = cartItemstate.map((e,i)=>{
            if(id===i){
                return{
                    ...e,
                    quantity:qty
                }
            }
            else{
                return e;
            }

        })

        updateCartItemstate(newCartItems);
    }

    const resetCart = () => {
                    updateCartItemstate([]);
                    setCount(0);
                    setStats({noOfItems:0,totalQnty:0,totalAmt:0});
                    let blank=[];
                    localStorage.setItem('AllCartItems',JSON.stringify(blank));
    }

    return (
        <CartAllItems.Provider value={{CartItems:cartItemstate,CartUpDateItems:updateCartItemstate,addToCart:addToCart,updateQty:updateQuantity,itemCount:stats.noOfItems,totalQty:stats.totalQnty,totalPrice:stats.totalAmt, resetCart}}>
        {props.children}
        </CartAllItems.Provider>
    );
}

export default CartContext;
export {CartAllItems};
