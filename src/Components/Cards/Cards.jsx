import React, {useState} from 'react';
import './Cards.scss';
import Like from '../../assets/icon/unliked.svg';

const Cards = (props) =>{
    const onClickButton = () => {
        console.log(props.imageUrl);
    };

    const [isAdd, setIsAdd] = useState();
     const onClickPlus = () => {
      setIsAdd(!isAdd);
    };
    React.useEffect(() => {
        console.log("Assalomu allaykum ");
    }, [isAdd]);

    return (
        <>
            <div className="card" onClick={props.onFavorite}>
                <div className="foverit">
                    <img src={Like} alt=""/>
                    {/*<i className="fa-solid fa-heart"></i>*/}
                </div>
                <img width={150} height={150} src={props.imageUrl} alt="ikki-eshik"/>
                <h5>{props.title}</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>{props.price} руб.</b>
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