import React, {useContext, useRef} from 'react';
import ItemCards from './ItemCards';
import '../styles/FeaturedItems.css';
import Hr from './Hr';
import { Items } from './Context/ItemContext';

let featuredRef='';

function FeaturedItems(props) {

    // using context for all the items in the store
    const itemHandle = useContext(Items);
    let { items } = itemHandle;

    // useRef for scroll
     featuredRef = useRef(null);


    let featItems = [...items];

    featItems.sort((a,b)=>{
        return b.price-a.price;
    })

    let lastItem = featItems[featItems.length-1];

    if(featItems.length>=3){
        featItems=featItems.slice(0,3);
    }

    featItems=[...featItems,lastItem];

        featItems.forEach((e,i)=>{
        console.log(i+" "+e.price);
        })


    return (
        <div className='mt-3' id='featured'>
            <h1 className="heading text-center">Featured Items</h1>

        <Hr/>

            {/* <div className="items"> */}
            {/* {items.map((e,i)=>{ */}
                {/* return( */}
                {/* <ItemCards key={i} name={e.name} details={e.details} price={e.price} currency={e.currency} upDateItems={upDateItems}/> */}
                <ItemCards  Items={featItems}/>
                {/* ) */}
            {/* })} */}

            {/* </div> */}
        </div>

    );
}

export default FeaturedItems;

export{featuredRef};