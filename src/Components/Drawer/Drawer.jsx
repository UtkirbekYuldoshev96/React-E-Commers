import React from 'react';
import './drawer.scss';


const Drawer = ({onClose, items = []}) => {
    return (
        <>
            <div className="overline">
                <div className="drawer">
                    <h3 className='mb-25 d-flex justify-between mb-20'>Savat
                        <button onClick={onClose} className='cardItemBtn'>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </h3>
                    <div className="items">
                        {items.map((obj) =>
                            <div className="cardItem d-flex justify-between align-center mb-20">
                                <div className="cardItemImag">
                                    <img className='mr-30' width={70} height={70} src={obj.imageUrl} alt=""/>
                                </div>
                                <div className='mr-20 mb-25'>
                                    <p className='mb-5'>{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <button className='cardItemBtn'>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        )}

                    </div>
                    <div    className="cardTotalBlock">
                        <ul>
                            <li>
                                <span>Jami: </span>
                                <div></div>
                                <b>21 498 руб. </b>
                            </li>
                            <li>
                                <span>Soliq 5%: </span>
                                <div></div>
                                <b>1074 руб. </b>
                            </li>
                        </ul>
                        <button className='greenBtn'>Ro'yxatdan o'chirilish <i className="fa-solid fa-right-long"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;