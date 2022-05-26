import React, {useState} from 'react';
import './index.scss';
import Cards from "./Components/Cards/Cards";
import Headers from "./Components/Header/Headers";
import Drawer from "./Components/Drawer/Drawer";


const arr = [
    {
        title: "Oq Kema",
        price: 12999,
        imageUrl: 'http://urlib.uz/wp-content/uploads/2020/08/oq-kema-500x750-1.jpg'},
    {
        title: "Shaytanat",
        price: 84999,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2l5CAB-13uON8zLYnEEDK_ifXxlvN7_vc3O-Gpl64IZvxS_25YlEHqOyyT8ulYyL0RM&usqp=CAU'},
    {
        title: "Tilla uzuk",
        price: 84299,
        imageUrl: 'https://kitoblardunyosi.uz/image/cache/catalog/badiiy_adabiyot/tilla-uzuk-mto-web-250x375.jpg'},
    {
        title: "Dunyoning ishlari",
        price: 15199,
        imageUrl: 'http://urlib.uz/wp-content/uploads/2020/08/Dunyoning-ishlari-500x750-1.jpg'},
    {
        title: "Ikki Eshik",
        price: 11299,
        imageUrl: 'http://urlib.uz/wp-content/uploads/2020/08/1447.jpg'},
];

const App = () => {
    const [cardOpen, setCardOpen] = useState(false);
    return (
        <div className='wrapper clear'>
            {cardOpen && <Drawer onClose={() => setCardOpen(false)}/>}
            <Headers onClickCard={() => setCardOpen(true)}/>

            <div className="content p-15">
                <div className='d-flex align-center justify-between mb-40'>
                    <h2 className='mb-40'>Barcha kitoblar</h2>
                    <div className="search-block d-flex align-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Qidiruv'/>
                    </div>
                </div>
                <div className="d-flex">
                    {
                        arr.map((obj) =>(
                            <Cards
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                                onFavorite={() => console.log("prevetka")}
                                onPlus={() => console.log("button")}
                            />
                            ))
                    }
                </div>
            </div>
        </div>
    );
};
export default App;