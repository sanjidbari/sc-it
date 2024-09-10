import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Card from '../Card/Card';
import data from '../../../public/objects/data.json'

const Banner = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('objects/data.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);

    return (
        <div>
            <div>
            <img src="img/logo.png" className='ml-auto mr-auto w-96' alt="" />
            <hr/>
            </div>
            <div className='p-14 grid md:grid-cols-3 grid-cols-1 gap-10 justify-evenly'>
                {
                    card.map(item => <Card
                        key={item.id}
                        item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Banner;
