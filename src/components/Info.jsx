import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const info = () => {
    const infoItems =[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:'Free Shiping',
            description:'Get your orders deliverd without any extra costs!'
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:'Support 24/7',
            description:'we are here to asist you anytime!'
        },
        {
            icon:<FaMoneyBillWave className='text-3xl text-red-600'/>,
            title:'100% Money Back',
            description:'Full refund if you are not satisfied!'
        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:'Payment Secure',
            description:'Your Payment is Secure! '
        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:'Discount',
            description:'Enjoy the best prices on our every Products! '
        },
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
             {infoItems.map((item,index)=>(
                <div key={index} className='flex flex-col item-center text-center p-4 border rounded-lg shadow-md
                 transform transition-transform duration-300 hover:scale-105 cursur-pointer'> 
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
             ))}
        </div>
    </div>
  )
}

export default info