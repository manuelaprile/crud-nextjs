import Link from 'next/link'

export function NavBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="lg:container max-w-xs sm:max-w-xs flex flex-wrap justify-between items-center mx-auto">
          <Link href='/'>
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" alt="Flowbite Logo">CRUD</span>
            </a>
          </Link>
          <Link href='new/'>
            <a className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">New Product</a>
          </Link>
        </div>
      </nav>
    </>
  )
}