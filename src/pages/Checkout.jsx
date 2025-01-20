import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shippingInfo , setShippingInfo] = useState({
    address:'',
    city:"",
    zipcode:""
  })
  const cart= useSelector(state=>state.cart)
  const navigate = useNavigate()
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber:"1234567",
      shippingInformation: shippingInfo,
      totalPrice:cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order')
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
      
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
        {/* Left Section */}
        <div className="md:w-2/3 flex flex-col space-y-6">
          {/* Billing Information */}
          <div className="border p-4 rounded-lg shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 mt-4 ${billingToggle ? '' : 'hidden'}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone No"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-4 rounded-lg shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 mt-4 ${shippingToggle ? '' : 'hidden'}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={(e)=>setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City Name"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={(e)=>setShippingInfo({...shippingInfo, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border rounded-md"
                  onChange={(e)=>setShippingInfo({...shippingInfo, zipcode: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-4 rounded-lg shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 mt-4 ${paymentToggle ? '' : 'hidden'}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
                <label className="block text-gray-700 ml-2">Cash On Delivery</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
              {paymentMethod === "dc" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Enter Card Number"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Card Holder Name</label>
                    <input
                      type="text"
                      name="cardHolderName"
                      placeholder="Enter Card Holder Name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="Enter CVV"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
           <div className='space-y-4'>
             {cart.products.map(product=>(
                <div key={product.id} className='flex justify-between'>
                    <div className='flex items-center'>
                        <img src={product.image} alt={product.name}
                        className='w-16 h-16 object-contain rounded'
                        />
                        <div className='ml-4'>
                            <h4 className='text-md font-semibold'>{product.name}</h4>
                            <p className='text-gray-600'>
                                &{product.orice} x {product.quantity}
                            </p>
                        </div>
                    </div>
                    <div className='text-gray-800'>
                      ${product.price}x{product.quantity}
                    </div>
                </div>
             ))}
           </div>
           <div className='mt-4 border-t pt-4'>
            <div className='flex justify-between'>
                <span>Total Price :</span>
                <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
            </div>
           </div>
           <button
           className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
           onClick={handleOrder}
           >Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
