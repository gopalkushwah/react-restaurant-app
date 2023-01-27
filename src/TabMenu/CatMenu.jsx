import React from 'react';

const CatMenu = ({filterItem, catItems}) => {
    return (
        <>
            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around'>
                    {
                        catItems.map((curelem,index)=>{
                            return <button className='btn btn-warning' key={index} onClick={() => filterItem(curelem)}>{curelem}</button>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CatMenu;