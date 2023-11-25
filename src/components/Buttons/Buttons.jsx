import React from 'react';
import { routes } from '../../routes';
import { Link } from 'react-router-dom';
import './button.css';

function Buttons() {

  return (
    <div className='btn-render-container'>
      {routes
        .filter(item => item.path !== '/')
        .map((item, index) => (
          <div key={index}>
            <Link to={item.path} className='card'>
              <h5>{item.displayName}</h5>
            </Link>
          </div>
        ))}
    </div>

  )
}

export default Buttons