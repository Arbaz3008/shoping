import React, { useEffect } from 'react';
import { Categories, data } from '../assets/mockData';
import trolley from '../assets/Images/trolley.png';
import Info from '../components/info';
import CategorySec from '../components/CategorySec';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart';
import Shop from './Shop';



const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state =>state.product)
  useEffect(()=>{
    dispatch(setProducts(data))
  },[])
  return (
    <div>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={trolley} alt="Shop banner" className="h-full w-full" />
          <div className="absolute top-7 left-8 text-white">
            <p className="text-lg font-semibold">Code With Arman</p>
            <h2 className="text-4xl font-bold mt-2">Welcome to the Shop</h2>
            <p className="text-sm mt-2">Millions + Products</p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 
            transform transition-transform duration-300 hover:scale-105"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Info/>
      <CategorySec/>
      <div className='container mx-auto py-12 '>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0,5).map(((product) =>(
          <ProductCart product={product}/>
          )))}
        </div>
      </div>
     
    </div>
     <Shop/>
     </div>
  );
};

export default Home;
