import React, {useEffect, useState} from 'react';
import './index.scss';
import Cards from "./Components/Cards/Cards";
import Headers from "./Components/Header/Headers";
import Drawer from "./Components/Drawer/Drawer";
// import './Components/Drawer/drawer.scss';

const App = () => {
    const [cardOpen, setCardOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [cardItems, setCardItems] = useState([]);

    useEffect(()=> {
        fetch('https://628f1fb10e69410599d594c8.mockapi.io/items')
            .then((res) => {
                return res.json()
            }).then((json) => {
            setItems(json);
        });
    }, []);


    const onClickSearch = (e) => {
        setSearch(e.target.value);
    };

    const AddClickCard = (obj) => {
        setCardItems((prev) => [...prev, obj])
    };
    return (
        <div className='wrapper clear'>
            {cardOpen && <Drawer items={cardItems} onClose={() => setCardOpen(false)}/>}
            <Headers onClickCard={() => setCardOpen(true)}/>
            <div className="content p-15">
                <div className='d-flex align-center justify-between mb-40'>
                    <h2 className='mb-40'>{search ? `Qidiruv ishlari "${search}"` : 'Barcha kitoblar'}</h2>
                    <div className="search-block d-flex align-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input onChange={onClickSearch} value={search} type="text" placeholder='Qidiruv'/>
                        {search && <button className='search-btn' onClick={() => setSearch('')}>
                            <i className="fa-solid fa-x"></i>
                        </button>}
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {
                        items
                            .filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item, index) =>(
                                <Cards
                                    key={index}
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    // onFavorite={() => console.log("prevetka")}
                                    onPlus={(obj) => AddClickCard(obj)}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    );
};
export default App;