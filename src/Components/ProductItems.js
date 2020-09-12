import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <h2>Product not found</h2>



  return (
    <div >
      <h1>This is a ProductsItem page</h1>
      <div className="link" >
        <h2>{shoe.name}</h2>
        <img src={shoe.img} height={700}           alt="shoe" />
      </div>
    </div>
  );
} 

export default ProductItems;