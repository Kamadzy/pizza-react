import React, {useState} from 'react';

const Categories = ({items}) => {

    const [status, setStatus] = useState(null);

    const onSelectedItem = (index) => {
        setStatus(index)
    }
    return (
        <div className="categories">
            <ul>
                <li>Все</li>

                {items.map((item, index) => (
                    <li key={index} onClick={() => onSelectedItem(index)}
                        className={status === index ? "active" : ''}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
