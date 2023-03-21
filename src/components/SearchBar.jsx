import React,{useState,useContext} from 'react';
import search from '../assets/search.png'
import {Link} from 'react-router-dom';
import { Items } from './Context/ItemContext';

let style1 = {
    background:' var(--main-color)',
    outline:' none',
    border:' none',
    position:' relative',
    right:' 2.7rem',
    top:' 1px',
    height:' 36px',
    width:' 36px',
    background:' rgb(173 173 173)'
}

let style2 = {
    width: '20px',
    height: '20px',
    objectFit: 'cover'
}



function SearchBar(props) {

    let[query,setQuery] = useState('');

    const itemHandle = useContext(Items);
        let { handleQuery } = itemHandle;

        function myQuery(){

            

            console.log('hanlding')
            handleQuery(query)
        }

    return (
        <div className='searchBox'>
        <form action="" className="searchForm" >
            <div className="inpDiv" style={{height:'35px',overflow:'hidden'}}>
            <input type="text" name="" id="" className='searchInp' style={{height:'35px',width:'35rem'}} placeholder='Search for Products' onChange={(e)=>{setQuery(e.target.value)}}/>
            
            <button className="search-button1" type='submit' style={style1} onClick={()=>{myQuery()}}>
            <Link to='/searchResults'>
                    <img src={search} alt="" style={style2} />
            </Link>
            </button>
            </div>
        </form>
            
        </div>
    );
}

export default SearchBar;