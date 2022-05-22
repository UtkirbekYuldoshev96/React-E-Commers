import React from 'react';

import Cards from "./Components/Cards/Cards";
import Headers from "./Components/Header/Headers";
import Drawer from "./Components/Drawer/Drawer";

const arr = [
    {name: "Algebra 6", price: 12999},
    {name: "Algebra 6", price: 12999},
    {name: "Algebra 6", price: 12999},
    {name: "Algebra 6", price: 12999},
    {name: "Algebra 6", price: 12999},
];

const App = () => {
    return (
        <div className='wrapper clear'>
            <Drawer/>
            <Headers/>
            <div className="content p-15">
                <div className='d-flex align-center justify-between mb-40'>
                    <h2 className='mb-40'>Barcha kitoblar</h2>
                    <div className="search-block d-flex align-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Qidiruv'/>
                    </div>
                </div>
                <div className="d-flex">
                    {arr.map((obj) =>(
                        <Cards/>
                    ) )}
                </div>
            </div>
        </div>
    );
};
export default App;