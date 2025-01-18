import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import empty from '../assets/Images/empty.png'
import { FaTrashAlt } from 'react-icons/fa'
import Changeadress from '../components/Changeadress'
import Modal from '../components/modal'
import {removefromCart} from'../redux/cartSlice'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address , setAddress] = useState('main street, 1122')
    const [ismodalopen , setisModalopen] = useState(false)
    const dispatch  =  useDispatch()
    return (
        <div>
            {cart.products.length > 0 ? (
                <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
                    <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>Products</p>
                                <div className='flex space-x-10'>
                                    <p>Price</p>
                                    <p>Quantity</p>
                                    <p>SubTotal</p>
                                    <p>Remove</p>
                                </div>
                            </div>
                            <div>
                                {cart.products.map((product) => (
                                    <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                      
                                        <div className='md:flex items-center space-x-4'>
                                            <img
                                                src={product.image}
                                                alt=''
                                                className='w-16 h-16 object-contain rounded'
                                            />
                                            <div className='flex-1 ml-4'>
                                                <h3 className='text-lg font-semibold'>{product.name}</h3>
                                            </div>
                                        </div>
                                       
                                        <div className='flex space-x-10 items-center'>
                                            <p>${product.price}</p>
                                            <div className='flex items-center justify-center border'>
                                                <button className='text-xl font-bold px-1.5 border-r'>-</button>
                                                <p className='text-xl px-2'>{product.quantity}</p>
                                                <button className='text-xl px-1 border-l'>+</button>
                                            </div>
                                            <div className=' flex space-x-12  items-center'>
                                                <p>${(product.quantity * product.price).toFixed(2)}</p>
                                                <button className='text-red-500  hover:text-red-700'
                                                onClick={()=> dispatch(removefromCart(product.id))}
                                                >
                                                    <FaTrashAlt  />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'> 
                            <h3 className='text-sm font-semibold mb-5'>Cart Total</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                            <p>Shipping:</p>
                                <p className='ml-2'>Shipping to {" "}
                                <span className='text-xs font-bold'>{address}</span>
                                </p>
                                <button className='text-blue-500 hover:underline mt-1 ml-2'
                                onClick={()=>setisModalopen(true)}
                                >Change address</button>
                            </div>   
                            <div>
                                <span className='flex justify-between mb-4'>Total Price:</span>
                                <span>{cart.totalPrice.toFixed(2)}</span>
                            </div> 
                            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Proceed To checkout</button>
                        </div>
                    </div>
                    <Modal
                        ismodalopen={ismodalopen}
                        setisModalopen={setisModalopen}>
                            <Changeadress setAddress={setAddress} setisModalopen={setisModalopen}/>
                    </Modal>
                </div>
            ) : (
                <div className='flex justify-center'>
                    <img src={empty} alt='' className='h-96' />
                </div>
            )}
        </div>
    )
}

export default Cart
