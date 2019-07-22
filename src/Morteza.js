import React from 'react';
import image from './morteza/morteza.jpg';
import { Link } from 'react-router-dom';
const Morteza = () => {
    return ( <div>
            <img src={image} />
    <h4 class="morteza-red">I Am Morteza</h4>
    </div>
  );
}
 
export default Morteza;