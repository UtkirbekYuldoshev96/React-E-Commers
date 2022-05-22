import React from 'react';
import Logo from "../../assent/books-logo-s.jpg";

const Headers = () => {
    return (
        <>
            <header className='d-flex justify-between align-center'>
                <div className="heaiderInfo">
                    <div className="d-flex align-center">
                        <h1><img src={Logo} width={120} height={120} alt="books"/></h1>
                        <div>
                            <h3>REACT SNEAKERS</h3>
                            <p className='opacity-5' style={{marginTop: "-15px"}}>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className='mr-30'>
                        <i className="fa-solid fa-cart-plus"></i>
                        <span style={{marginLeft: "25px"}}>1205 руб.</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-circle-user"></i>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Headers;