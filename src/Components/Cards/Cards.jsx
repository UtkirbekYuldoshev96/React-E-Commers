import React from 'react';
import Gemetr7 from "../../assent/geometriya-7.png";
import Algebra6 from "../../assent/algebra-6.jpg";
import Algebra7 from "../../assent/algebra-7.jpg";
import Algebra8 from "../../assent/algebra-8.jpg";
import Algebra9 from "../../assent/algebra-9.jpg";

const Cards = () => {
    return (
        <>
            <div className="card">
                <div className="foverit">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <img width={150} height={150} src={Algebra6} alt="ikki-eshik"/>
                <h5>Algebra 6</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button className='button'>
                        <i className="fa-regular fa-plus"></i>
                    </button>
                </div>
            </div>
            {/*  2 */}
            <div className="card">
                <div className="foverit">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <img width={150} height={150} src={Algebra7} alt="ikki-eshik"/>
                <h5>Algebra 7</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button className='button'>
                        <i className="fa-regular fa-plus"></i>
                    </button>
                </div>
            </div>
            {/* 3 */}
            <div className="card">
                <div className="foverit">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <img width={150} height={150} src={Algebra8} alt="ikki-eshik"/>
                <h5>Algebra 8</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button className='button'>
                        <i className="fa-regular fa-plus"></i>
                    </button>
                </div>
            </div>
            {/* 4 */}
            <div className="card">
                <div className="foverit">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <img width={150} height={150} src={Algebra9} alt="ikki-eshik"/>
                <h5>Algebra 9</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button className='button'>
                        <i className="fa-regular fa-plus"></i>
                    </button>
                </div>
            </div>
            {/* 5 */}
            <div className="card">
                <div className="foverit">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <img width={150} height={150} src={Gemetr7} alt="ikki-eshik"/>
                <h5>Geometra 7</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button className='button'>
                        <i className="fa-regular fa-plus"></i>
                    </button>
                </div>
            </div>
        </>
    );
};
export default Cards;