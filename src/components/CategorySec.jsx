import React from 'react'
import ManCategory from'../assets/Images/maan.png' ;
import WomanCategory from'../assets/Images/bachi.jpeg';
import KidCategory from'../assets/Images/kid.jpeg'

const CategorySec = () => {
    const categories =[
        {
            title:'Men',
            imageurl:ManCategory,
        },
        {
            title:'Women',
            imageurl:WomanCategory,
        },
        {
            title:'Kid',
            imageurl:KidCategory,
        },
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category,index)=>(
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursur-pointer'>
              <img src={category.imageurl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
              <div className='absolute top-10 left-5'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySec