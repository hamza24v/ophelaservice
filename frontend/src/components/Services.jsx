import React from 'react'
import ServiceCard from './ServiceCard';
import { services } from '../constants';
import { Button } from '@mui/material';
import Shop from '../pages/Shop/Shop';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../utils';

function Services() {
  
  return (
    <section className='flex flex-col justify-center items-center mt-10'>
      <h2 className='text-5xl mb-5 font-semibold text-center'>Services We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} image={service.image} description={service.description} />
        ))}
      </div>
      <NavLink to='/Shop' onClick={() => scrollToTop()}>
        <Button
          size='large'
          variant='contained'
          color='salmon'
          style={{ marginTop: '20px' }}
          onClick={<Shop />}
        >
          Shop Now
        </Button>
      </NavLink>
    </section>

  );
}

export default Services