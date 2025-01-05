import React from 'react'
import Header from '../components/Header'


const Wishlist = () => {
  return (
    <>
    
   <Header/>

   <div style={{paddingTop:'100px'}} className='container px-4 mx-auto' >
    <>
    <h1 className='text-4xl font-bold text-red-600'> My wishlist</h1>

    <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDem-xiP3dM4D0u_BlotaGx1FKFf7FuncXw&s" alt="" />


             <div className='text-center' >
                <h3 className='text-xl font-bold'>Product name</h3>
                <div className='flex justify-evenly mt-3'>
                    <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-600 "></i></button>
                    <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
                </div>
             </div>

            </div>
           

        </div>
    
    
    </>

   </div>
   </>
  )
}

export default Wishlist