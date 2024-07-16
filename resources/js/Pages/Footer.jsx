
import { Link } from '@inertiajs/react';
import { Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
// import './Footer.css'; // Make sure to create this CSS file if you need custom styles
export default function Footer() {
  return (
    <div className="bg-dark px-5 pt-5 pb-2" style={{color: "#888"}}>
      <div className='row d'>
      <ul className="d-flex flex-column col-md-5" style={{width: "40%"}}>
        <li>PRODUCT</li>
        <li>Photovoltaic Labs</li>
        <li>SUPPORT</li>
        <li><Link href="about" >About Us</Link></li>
        <li><Link href="contact" >Contact</Link></li>
      </ul>
      <div className='col-md-5 my-4'>
        <h5 className='fw-bold fs-5'>SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
        <div className="d-flex my-4 align-items-center">
        <input type="email" className="form-control h-10" placeholder="Enter your email address"/>
        <Button variant="outline-light" className='m-2 h-10'>Subscribe</Button>

        </div>
      </div>
      </div>
      
      
      <div className="d-flex justify-content-between" style={{borderTop: "1px solid #555", paddingTop:"1.2rem"}}>
      <p className="text-center">Copyright © 2022 GreenVLabs. All rights reserved.</p>
      <ul className="d-flex ">
        <li><a href="https://www.facebook.com/GreenVLabs" className='text-light' target="_blank" rel="noopener noreferrer"><Facebook/></a></li>
        <li><a href="https://www.linkedin.com/company/greenvlabs/" className='text-light' target="_blank" rel="noopener noreferrer"><LinkedIn/></a></li>
        <li><a href="https://www.youtube.com/@GreenVLabs" className='text-light' target="_blank" rel="noopener noreferrer"><YouTube/></a></li>
        
      </ul>
      </div>
    </div>
  )
}