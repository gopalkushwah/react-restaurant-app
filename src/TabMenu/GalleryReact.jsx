import React, { useState } from 'react';
import './tab.css';
import Menu from './menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues=[...new Set(Menu.map((elem)=>{return elem.category})),"all"]

const GalleryReact = () => {
    const [items, setItems] = useState(Menu);
    const [catItems,setCatItems]=useState(allCatValues);
    const filterItem=(categdata)=>{
        if(categdata==="all"){
            setItems(Menu);
            return;
        }

        setItems(Menu.filter(elem=>elem.category===categdata));
    }
    return (
        <>
        
            <h1 className='mt-5 text-center main-heading'>Order your favourite Dish</h1>
            <CatMenu filterItem={filterItem} catItems={catItems} />
            <MenuItems items={items} />
        </>
    )
}

export default GalleryReact;