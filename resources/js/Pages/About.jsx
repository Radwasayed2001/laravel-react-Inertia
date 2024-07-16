import ReactPlayer from 'react-player';
import { Card } from 'react-bootstrap';
import Footer from './Footer';
import GuestLayout from '@/Layouts/GuestLayout';
import Video from "../../../public/build/assets/images/Photovoltaic 3D IV Curve Experiment (GreenVLabs.com).mp4";
import { Head } from '@inertiajs/react';
export default function About() {
  return (
    <GuestLayout>
      <Head title="About Us" />
    <div style={{maxWidth: "100vw", minHeight: "85vh", overflow: 'hidden'}} className='bg-light'>
      <div className="row d-flex flex-column align-items-center justify-content-start" style={{minHeight: "100vh"}}>
        
        <div className="col-md-11 row p-0">
          <div className="col-md-5 p-5" style={{/*background: "#806699", */display: "flex" , flexDirection: "column", justifyContent: "space-around"}}>
          <h2 className='text-success fw-bold fs-2'>About Us</h2>

          <p className='fw-bold fs-5 py-2'>Welcome to GreenVLabs, where we are revolutionizing electrical engineering education through the power of innovation and technology.</p>
          
            <p className='fs-6 py-3'>Traditional lab setups often come with limitations, such as constrained resources, limited accessibility, and fixed schedules, hindering students' ability to explore freely and at their own pace. With our virtual lab system, we aim to overcome these challenges, offering a flexible and immersive learning experience accessible from anywhere, at any time.</p>
        
          </div>
          <div className="col-md-7 pt-5">
          <ReactPlayer
              url={Video}  // Replace with your video URL
              playing
              loop
              controls={false}
              width='100%'
              height='100%'
              className="video-player"
            />
          </div>
          <div className="col-11 mt-3">
            <Card className='mb-1' border="success">
              <Card.Body>
                <Card.Text className='fw-bold'>
                We’ve developed a product that makes virtual science labs accessible, usable, and affordable for educational institutions and schools
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </GuestLayout>
  )
}