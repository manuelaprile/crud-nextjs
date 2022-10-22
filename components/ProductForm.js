import axios from "axios";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from "react-hot-toast";

function ProductForm() {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  })

  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get('/api/products/' + router.query.id);
        setProduct(data);
      } catch (error) {
        console.error(error)
      }
    }

    if (router.query?.id) {
      getProduct(router.query.id)
    }
  }, [router.query.id])

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(router.query?.id){
        console.log('update')
        const res = await axios.put('/api/products/' + router.query.id, {
          name: product.name,
          description: product.description,
          price: product.price,
        });
        toast.success("Task Updated", {
          position: "bottom-center",
        });
      }else{
        const res = await axios.post('/api/products', product);
        toast.success("Task Saved", {
          position: "bottom-center",
        });
      }
      router.push('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }


  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label>Name:</label>
        <input type='text' name="name" onChange={handleChange} className='block w-full mb-3 shadow focus:shadow-outline border rounded py-2 px-3 text-gray-700' value={product.name}></input>
        <label>Price:</label>
        <input type='text' name="price" id="price" onChange={handleChange} className='block w-full mb-3 shadow focus:shadow-outline border rounded py-2 px-3 text-gray-700' value={product.price}></input>
        <label>Description:</label>
        <textarea name="description" rows="2" onChange={handleChange} className='block w-full mb-3 shadow focus:shadow-outline border rounded py-2 px-3 text-gray-700' value={product.description}></textarea>
        <button className="block w-full bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">Save Product</button>
      </form>
    </div>
  )
}

export default ProductForm