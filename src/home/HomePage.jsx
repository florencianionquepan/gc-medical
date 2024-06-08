import React from 'react'
import { Hero } from './Hero'

export const HomePage = () => {
  return (
    <>
    <Hero/>
    <div className='container-fluid'>
      <div className='row border border-5 border-warning bg-warning my-4'>
        <div className='col-4 mx-auto'>
            <img className='img-fluid rounded' alt='imagen-1' src='/img/cardio.png'/>
        </div>
        <div className='col-6 border border-warning bg-body'>
          <h2> Diabetes </h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Qui ab labore quis nemo velit similique reiciendis quisquam assumenda adipisci, ratione voluptate porro nam consequatur ullam natus? Illo, 
            corrupti. Aspernatur, unde.</p>
        </div>
      </div>

      <div className='row  border border-5 border-secondary bg-secondary mb-4'>
        
        <div className='col-6 border border-secondary bg-body'>
          <h2> Cardiologia </h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Qui ab labore quis nemo velit similique reiciendis quisquam assumenda adipisci, ratione voluptate porro nam consequatur ullam natus? Illo, 
            corrupti. Aspernatur, unde.</p>
        </div>
        <div className='col-4 mx-auto'>
            <img className='img-fluid rounded' alt='imagen-1' src='/img/cardio.png'/>
        </div>
      </div>

      <div className='row border border-5 border-primary bg-primary mb-4'>
        
        <div className='col-8 border border-primary bg-body'>
          <h2> Gastroenterologia </h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Qui ab labore quis nemo velit similique reiciendis quisquam assumenda adipisci, ratione voluptate porro nam consequatur ullam natus? Illo, 
            corrupti. Aspernatur, unde.</p>
        </div>
        <div className='col-4 mx-auto'>
            <img className='img-fluid rounded' alt='imagen-1' src='/img/cardio.png'/>
        </div>
      </div>


      <div className='row  border border-5 border-warning bg-warning'>
        <div className='col-4 mx-auto'>
            <img className='img-fluid rounded' alt='imagen-1' src='/img/cardio.png'/>
        </div>
        <div className='col-6 border border-warning rounded bg-body'>
            <h2> Neurologia </h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Qui ab labore quis nemo velit similique reiciendis quisquam assumenda adipisci, ratione voluptate porro nam consequatur ullam natus? Illo, 
            corrupti. Aspernatur, unde.</p>
        </div>
      </div>

    </div>
    </>
  )
}
