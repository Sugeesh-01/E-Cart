import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <div>
    <div className='flex justify-between mt-3'>
      <div className='flex  bg-violet-600 fixed text-white w-full p-5'>

        {/* Intro */}
        <div style={{width:'400px'}}>
          <h5>
          <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-truck-fast"></i> E cart</Link>
          </h5>
          <p>Designed and built with all the love in the world by the luminar team with the help of our contributors</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>

        </div>
        {/* Links */}
        <div className='flex flex-col'>
          <h5>Links</h5>
          <Link to={'/'}style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/home'}style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/history'}style={{textDecoration:'none', color:'white'}}>Watching History Page</Link>

        </div>
        {/* Guides */}

        <div className='flex flex-col'>
          <h5>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target="_blank">React</a>
          <a style={{textDecoration:'none', color:'white'}} href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target="_blank">Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target="_blank">React Router</a>

        </div>
        {/* Contact */}
        <div className='flex flex-col'>
          <h5>Contacts</h5>
       
         <div className='flex'>
           <input type="mail" placeholder='Enter your Email address..' className='form-control me-2'/>
           <button className='btn btn-info '><i class="fa-solid fa-arrow-right"></i></button>
         </div>

         <div className='flex justify-between mt-3'>
          <a href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target='_blank' ><i class="fa-brands fa-twitter"></i></a>


          <a href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram"></i></a>


          <a href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook-f"></i></a>

          <a href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin"></i></a>

          <a href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-github"></i></a>


          <a href="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-phone"></i></a>

         </div>


        </div>

      </div>

    </div>
  </div>

    
  )
}

export default Footer