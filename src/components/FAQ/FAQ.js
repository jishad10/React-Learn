import React, { useState } from 'react';

import style from './faq.module.css';
//id ,tittle ... ey data golo recive korteche
//click korle false thalke true hobe and true thakle false hobe
const FAQ = ({ id, title, desc }) => {
    const [toggle, setToggle] = useState(false); //initially false thakbes
    return (
        <article className={style.faq}>
            <div>
                <h4>{title}</h4>
                <button
                    onClick={() => {
                        setToggle(!toggle);
                    }}>
                    {toggle ? '-' : '+'}
                </button>
            </div>
            {toggle && <p>{desc}</p>}
        </article>
    );
};

export default FAQ;
