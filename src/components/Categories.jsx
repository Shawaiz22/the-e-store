import React,{useContext} from 'react';
import ItemCards from './ItemCards';
import '../styles/Categories.css';
import Hr from './Hr';
import { Items } from './Context/ItemContext';

function Categories(props) {

    // using context for all the items in the store
    const itemHandle = useContext(Items);
    let { items } = itemHandle;

    // let mensItems = [...items];
    // let electricItems = [...items];
    // let stationaryItems = [...items];

   let mensItems=items.filter((e)=>{
        if( e.category==='menswear'){
            return e;
        }
    })

   let stationaryItems=items.filter((e)=>{
        if( e.category==='stationary'){
            return e;
        }
    })

   let electricItems=items.filter((e)=>{
        if( e.category==='electronics'){
            return e;
        }
    })

    let groceryItems=items.filter((e)=>{
        if( e.category==='grocery'){
            return e;
        }
    })

    let childItems=items.filter((e)=>{
        if( e.category==='children'){
            return e;
        }
    })

    let cosmeticItems=items.filter((e)=>{
        if( e.category==='cosmetics'){
            return e;
        }
    })

    let bookItems=items.filter((e)=>{
        if( e.category==='books'){
            return e;
        }
    })    

    let sportItems=items.filter((e)=>{
        if( e.category==='sports'){
            return e;
        }
    })    

    let healthItems=items.filter((e)=>{
        if( e.category==='healthcare'){
            return e;
        }
    })    




    return (
        <div className=' mt-3 main-category'>
        <h1 className='text-center'> CATEGORIES </h1>

        <Hr/>

            <br />
            <h3 className='text-center' id='menswear'> MENS WEAR </h3>
            <div className="categories" >
            <ItemCards Items={mensItems}/>
            </div>

            <h3 className='text-center'  id='electronics'> ELECTRONICS </h3>
            <div className="categories">
            <ItemCards Items={electricItems}/>
            </div>

            <h3 className='text-center' id='stationary'> STATIONARY </h3>
            <div className="categories" >
            <ItemCards Items={stationaryItems}/>
            </div>

            <h3 className='text-center' id='grocery'> GROCERY </h3>
            <div className="categories" >
            <ItemCards Items={groceryItems}/>
            </div>   

            <h3 className='text-center' id='children'> CHILDREN </h3>
            <div className="categories" >
            <ItemCards Items={childItems}/>
            </div>        

            <h3 className='text-center' id='books'> BOOKS </h3>
            <div className="categories" >
            <ItemCards Items={bookItems}/>
            </div>                     

            <h3 className='text-center' id='healthcare'> HEALTHCARE </h3>
            <div className="categories" >
            <ItemCards Items={healthItems}/>
            </div>                       

            <h3 className='text-center' id='cosmetics'> COSMETICS </h3>
            <div className="categories" >
            <ItemCards Items={cosmeticItems}/>
            </div>                                   

            <h3 className='text-center' id='sports'> SPORTS </h3>
            <div className="categories" >
            <ItemCards Items={sportItems}/>
            </div>                                   

        </div>
    );
}

export default Categories;