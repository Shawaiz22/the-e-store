import React from 'react';
import Categories from './Categories';
import FeaturedItems from './FeaturedItems';


function ShoppingItem(props) {
    return (
        <>
            <FeaturedItems/>
            <Categories/>
        </>
    );
}

export default ShoppingItem;