import React, { useState } from 'react';

import style from './faqs.module.css';
import { faqsData } from './data'; //data golo ke import ko re nicchi
import FAQ from './FAQ';
const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);

    return (
        <main className={style.container}>
            <section className={style.faqs}>
                <h1>FAQs</h1>
                {/* faqs  mapping ko re data ni e ashe && faq componenet e patacchi id and spreed operator maddome baki ja aace sob golos*/}
                {faqs.map((faq) => (
                    <FAQ key={faq.id} {...faq} />
                ))}
            </section>
        </main>
    );
};

export default FAQS;
