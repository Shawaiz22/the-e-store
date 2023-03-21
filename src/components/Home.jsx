import React from 'react';

import EntryCarousel from './EntryCarousel';
import Foot from './Foot';

import NavB from './NavB';
import ShoppingItem from './ShoppingItem';

function Home(props) {
    return (
        <div>
            {/* <header style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', border:'2px solid black'}}> */}
            <NavB/>
            <EntryCarousel/>
            {/* </header> */}
            <ShoppingItem/>
            <Foot/>
        </div>
    );
}

export default Home;