
import Link from 'next/link'

export function ProductCard({product}) {
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
    <a>
      <div className='border border-gray-200 shadow-md p-6 my-4'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </a>
  </Link>
  )
}

