import React from 'react';
import Shoes from './../shoes.json'


function App() {

    return (

        <div>
            <h1>This is a Product Page      </h1>
            <div>

                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName]
                    return (
                        <div>
                            <h2>{shoe.name}</h2>
                            <img src={shoe.img} height={150} />
                        </div>)
                })}

            </div>
        </div>
    );
}

export default App;