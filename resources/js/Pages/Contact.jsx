import IoMail from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Footer from './Footer';
import GuestLayout from '@/Layouts/GuestLayout';
import "./Contact.css"
import { Head } from '@inertiajs/react';
export default function Contact() {
  return (
    <GuestLayout>
      <Head title="Contact" />
    <div className='bg-light' style={{maxWidth: "100vw", minHeight: "100vh", overflow: 'hidden'}}>
      <div className="row d-flex flex-column justify-content-center align-items-center" style={{minHeight: "80vh"}}>
        
        <div className="col-md-10 shadow row bg-light p-0 my-5" style={{border: "1px solid #f0f0f0"}}>
          <div className="col-md-4 p-5 bg-success" style={{/*background: "#806699", */color: "white", display: "flex" , flexDirection: "column", justifyContent: "space-around"}}>
          <h3 className='fw-bold fs-3'>Contact information</h3>

          <p className='mt-3'>Let's get this conversation started. Send us your message, and we'll get in touch as soon as we can.</p>
          
            <p className='mt-3'><IoMail /> Email: Contact@greenvlabs.com</p>
            <ul className="d-flex w-25 mt-3 justify-content-between">
        <li><a href="https://www.facebook.com/GreenVLabs" className='text-light' target="_blank" rel="noopener noreferrer"><FacebookIcon/></a></li>
        <li><a href="https://www.linkedin.com/company/greenvlabs/" className='text-light' target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></li>
        <li><a href="https://www.youtube.com/@GreenVLabs" className='text-light' target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a></li>
        
      </ul>
          </div>
          <form className="col-md-8 bg-white p-5">
            <div className="form-header fs-3 fw-bold"><h3>Send us a message</h3></div>
            <div className="row pb-5 pt-2">
            <div className="form-group col-md-6 mb-2">
              <label className='pb-2 pt-4'>First name</label>
              <input type="text" className="form-control" id="exampleFormControlInput2"/>
            </div>
            <div className="form-group col-md-6 mb-2">
              <label className='pb-2 pt-4'>Last name</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group col-md-6 mb-2">
              <label >Email address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group col-md-6 mb-2">
              <label >Phone</label>
              <input type="phone" className="form-control" />
            </div>
            <div className="form-group col-md-12 mb-2">
              <label >Subject</label>
              <input type="text" className="form-control"   />
            </div>
            <div className="form-group col-md-12">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here..." />
            </div>
            </div>
           
            <button type="submit" className="btn btn-success ms-3 " style={{color: "white"}} >Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
    </GuestLayout>
  )
}