import axios from 'axios';
import React from 'react'
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import Link from 'next/link';
import { render } from 'react-dom';

function HomePage({ products }) {

  const renderProducts = () => {
    if(products.length === 0) return <h1 className='text-center text-2xl font-bold'>Not products yet...</h1>
    return products.map(product => (<ProductCard key={product.id} product={product} />) )
  }

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
        {renderProducts()}
      </div>
    </Layout>
  )
}

//Funcion especial de next, que se ejecuta antes de mostrar lo de arriba
export const getServerSideProps = async (context) => {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      products: res.data,
    }
  }
}


export default HomePage;