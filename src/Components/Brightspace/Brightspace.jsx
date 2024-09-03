import React, { useEffect, useState } from 'react';
import brightspace from '../../../public/objects/brightspace.json'

const Brightspace = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../../../public/objects/brightspace.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data)

    return (
        <div>
            {
                data.map(item => <div key={item.id} className="collapse collapse-plus bg-base-200 m-6" >
                    <input type="radio" name="my-accordion-3"/>
                    <div className="collapse-title text-2xl font-medium bg-indigo-100">{item.title}</div>
                    <hr></hr>
                    <div className="collapse-content text-left ml-28 text-3xl">
                        <p dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br />') }} className='pt-4 text-lg' />
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Brightspace;