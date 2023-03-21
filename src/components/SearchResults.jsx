import React, {useContext, useEffect,useState} from 'react';
import { Items } from './Context/ItemContext';
import ItemCards from './ItemCards';
import NavB from './NavB';


function SearchResults(props) {

        // using context for all the items in the store
        const itemHandle = useContext(Items);
        let { searchItems } = itemHandle;

        let[searchRes,setSearchRes] = useState([]);

        useEffect(()=>{
            setSearchRes(searchItems)
        },[searchItems])

        let results =   <div  style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap', marginTop:'12rem',flexDirection:'column'}}>
                            <h4 className="text-center">Search Results</h4>
                            {<ItemCards Items={searchRes}/>}
                        </div>

        let noFound = <div className='text-center' style={{marginTop:'12rem'}}>No Results Found</div>


    return (
        <div>
            <NavB/>
            {searchRes.length>0 ? results : noFound}
        </div>
    );
}

export default SearchResults;

