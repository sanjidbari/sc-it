import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const { id, path, img } = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl ">
                <Link key={id} to={path}><img className='rounded-md' src={img} /><figure>
                </figure>
                    <div className="card-body text-2xl">
                        {path}
                    </div></Link>
            </div>
        </div>
    );
};

export default Card;