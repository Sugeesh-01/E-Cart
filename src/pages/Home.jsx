import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'





const Home = () => {

  const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchProducts())
   },[])

  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDem-xiP3dM4D0u_BlotaGx1FKFf7FuncXw&s" alt="" />


             <div className='text-center' >
                <h3 className='text-xl font-bold'>Product name</h3>
                <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'> View more..</Link>
             </div>

            </div>
           

        </div>

    </div>

    </>
  )
}

export default Home