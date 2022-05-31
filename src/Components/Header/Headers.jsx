import React from 'react';
import Logo from "../../assets/books-logo-s.jpg";

const Headers = (props) => {
    return (
        <>
            <header className='d-flex justify-between align-center'>
                <div className="heaiderInfo">
                    <div className="d-flex align-center">
                        <h1><img src={Logo} width={120} height={120} alt="books"/></h1>
                        <div>
                            <h3>NAJOT ILM</h3>
                            <p className='opacity-5' style={{marginTop: "-15px"}}>Eng yaxshi kitoblarni xarid qiling</p>
                        </div>
                    </div>
                </div>
                <ul className="d-flex">
                    <li onClick={props.onClickCard} className='mr-30 cu-p'>
                        <i className="fa-solid fa-cart-plus"></i>
                        <span style={{marginLeft: "25px"}}>1205 so'm.</span>
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