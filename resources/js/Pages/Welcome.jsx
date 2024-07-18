import { Link, Head, usePage } from '@inertiajs/react';
import { Container, Nav, Navbar, NavDropdown, Dropdown, Card, Button } from 'react-bootstrap';
import Logo from "../../images/logo.png"
import Usa from "../../images/usa.png"
import Egp from "../../images/egypt.png"
import Lab from "../../images/NewLab4.png"
import "../Layouts/GuestLayout.css"
import Footer from './Footer';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
// import Footer from './Footer';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const { flash } = usePage().props;

  useEffect(() => {
    if (flash && flash.message) {
      toast.success(flash.message);
    }
  }, [flash]);

    return (
        <>
            <Head title="Home" />
            <div>
      <Navbar expand="lg" className="bg-body-light bg-light ">
        <Container>
          <Navbar.Brand as={Link} to="guesthome" className='d-flex align-items-md-center'>
            <img src={Logo} alt="" width={"70px"}/>
            <span className='text-success fw-bold fs-4'>GreenVLabs</span>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Lang" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} className='d-flex' to="#action/3.3">
                  <img src={Usa} width={"20px"} alt="eng" className='me-2' /> English
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} className='d-flex' to="#action/3.4">
                  <img src={Egp} width={"20px"} alt="arabic" className='me-2' /> عربي
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              
              {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                  <>
                                  <Link className='text-decoration-none me-5 text-dark' href="/">Home</Link>
              <Link className='text-decoration-none me-5 text-dark' href="/contact">Contact</Link>
              <Link className='text-decoration-none me-5 text-dark' href="/about">About Us</Link>
              <Dropdown className='w-90'>
                <Dropdown.Toggle as={Container} className='text-decoration-none me-5 text-dark container' style={{ cursor: "pointer" }}>
                  <span className="material-symbols-outlined">account_circle</span>
                </Dropdown.Toggle>
                <Dropdown.Menu id='dropdown'>
                  <Dropdown.Item className='d-flex ms-2' style={{ width: "90%"}}>
                    <span className="material-symbols-outlined me-2">login</span>
                    <Link href={route('login')}>Login</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='d-flex ms-2' style={{ width: "90%" }}>
                    <span className="material-symbols-outlined me-2">person_add</span>
                    <Link href={route('register')}>Register</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </>
                                )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div className='bg-light pt-3'>
      <Container>
      <div className="row d-flex align-items-center">
        <div className="oval-shape col-md-4">
          <img src={Lab} alt=""style={{
            maxWidth: "100%",
            height: "400px",
            borderRadius: "50%",
          }} />
        </div>
        <div className="col-md-7 pt-5">
          <h1 className='fw-bold fs-2 mb-3'>Join GreenVLabs Now</h1>
          <p className='mb-4 fs-5'>Get ready to move students from a one-time science experiment to practicing any time you want! Feel the full power of virtual experiments</p>
          <Button variant="outline-dark">Request a Demo</Button>
        </div>
      </div>
      
        <div className="mt-5 pt-5 text-center" style={{borderTop: "solid 1px #eee"}}>
          <h1 className='fw-bold fs-3'>Guide the Best Science Lab Simulation Experience Ever</h1>
        </div>
        <div className="mt-3 row container pt-5" style={{display: "flex", justifyContent: "center", width: "100%", flexWrap: "wrap"}}>
          <div className="col-md-4">
            <Card className='mb-5 shadow' border="success" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>3D Virtual Experiments</Card.Title>
                <Card.Text>
                  Engage in immersive 3D experiments.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='mb-5 shadow' border="success" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Awesome Game-Like Experience</Card.Title>
                <Card.Text>
                  Enjoy a fun, game-like interface.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='mb-5 shadow' border="success" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Virtual Experiments</Card.Title>
                <Card.Text>
                  Conduct realistic virtual experiments.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>

        </>
    );
}
