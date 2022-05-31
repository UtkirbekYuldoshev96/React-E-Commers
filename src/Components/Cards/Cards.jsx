import React, {useState} from 'react';
import './Cards.scss';
import Like from '../../assets/icon/unliked.svg';

const Cards = ({title, imageUrl, price, onFavorite, onPlus }) =>{

    const [isAdd, setIsAdd] = useState();

     const onClickPlus = () => {
      setIsAdd(!isAdd);
      onPlus({title, imageUrl, price});
    };

    React.useEffect(() => {
        // console.log("Assalomu allaykum ");
    }, [isAdd]);

    return (
        <>
            <div className="card" onClick={onFavorite}>
                <div className="foverit">
                    <img src={Like} alt=""/>
                </div>
                <img width={150} height={150} className='card-img' src={imageUrl} alt="ikki-eshik"/>
                <h5>{title}</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>{price} sum.</b>
                      </div>
                    <button className='button' onClick={onClickPlus}>
                        {
                            isAdd
                            ? <i className="fa-solid fa-circle-check"></i>
                            : <i className="fa-regular fa-plus"></i>
                        }
                    </button>
                </div>
            </div>
        </>
    );
};
export default Cards;