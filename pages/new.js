import React from 'react'
import ProductForm from '../components/ProductForm'
import { Layout } from '../components/Layout'

function NewPage() {
  return (
    <Layout>
      <div className='grid place-items-center md:h-5/6'>
        <ProductForm />
      </div>
    </Layout>

  )

}

export default NewPage