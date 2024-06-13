import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const ProductLinePage = () => {

  const {linea} = useParams();
  const navigate = useNavigate();

  return (
    <div className='container-md'>
      <h5>
      ProductLinePage : {linea} 
      </h5>
    </div>
  )
}
