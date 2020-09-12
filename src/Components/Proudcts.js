import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json'


function App() {
    console.log(Shoes)

    return (

        <div>
            <h1>This is a Product Page      </h1>
            <div className="nibhhago">
                {Object.keys(Shoes).map     (keyName => {
                    const shoe = Shoes[keyName];
                    return (
                             <Link key={keyName}  className="link" to={`/product/${keyName}`}>
                            <h2>{shoe.name}</h2>
                            <img src={shoe.img} height={150} alt="shoe" />
                        </Link>)
                })}

            </div>
        </div>
    );
}

export default App;