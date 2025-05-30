import React from 'react';
import pizzaData from '../../data/pizza-data.json';
import ItemCard from '../ItemCard/ItemCard';

const Menu = () => {
    const [search, setSearch] = React.useState('');
    const pizzaDataFiltered = pizzaData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='menu__container'>
            <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />

            {pizzaDataFiltered.map(({key, name, img, price}) => (
                <ItemCard
                    key={key}
                    id={key}
                    name={name}
                    img={img}
                    price={price}
                />
            ))}

        </div>
    );
};

export default Menu;
