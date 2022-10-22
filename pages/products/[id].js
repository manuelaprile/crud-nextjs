import axios from 'axios'
import { Layout } from '../../components/Layout'
import { useRouter } from 'next/router';
import toast from "react-hot-toast";

function ProductView({ product }) {

  const router = useRouter();

  const handleDelete = async (id) => {

    try {
      const res = await axios.delete('/api/products/' + id)
      toast.success("Task deleted");
      router.push('/')
    } catch (error) {
      console.error(error.message);
    }

  }

  console.log(product);
  return (
    <Layout>
      <div className='grid place-items-center md:h-5/6'>
        <div className='w-full max-w-xs'>
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <div className='mt-3'>
              <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => handleDelete(product.id)}>
                delete
              </button>
              <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900' onClick={() => router.push('/products/edit/' + product.id)}>
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  //El context query.id toma el id de /api/products/id
  const res = await axios.get('http://localhost:3000/api/products/' + context.query.id)
  return {
    props: {
      product: res.data
    }
  }
}

export default ProductView