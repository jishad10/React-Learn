import React, { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true); //initially show hobe tai true dichi
    return (
        <div style={{ margin: '1rem', backgroundColor: 'pink', padding: '1rem' }}>
            {/* p ta ekti 2nd bracket er modde reke dicchi jodi toggle true hoi taile ei ta dekabe */}
            {toggle && (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel ipsam error ex? Doloribus voluptatibus, esse et culpa ullam cum consequuntur aperiam alias sapiente! Itaque
                    similique delectus fugit labore doloribus?
                </p>
            )}
            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={() => {
                        setToggle(!toggle); //true hole toggle er value false do re ni be
                    }}>
                    {/* hide and show alada button e na dekie ekta button e dekate caacchi jodi toggle true hoi taile hide button ta dekabe */}
                    {toggle ? 'Hide' : 'Show'}
                </button>
            </div>
        </div>
    );
};

export default Toggle;
