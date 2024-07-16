import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap';
import Logo from "../../../public/build/assets/images/logo.png"
import Usa from "../../../public/build/assets/images/usa.png"
import Egp from "../../../public/build/assets/images/egypt.png"
import "./GuestLayout.css"
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function Guest({ children }) {
  const { flash } = usePage().props;

  useEffect(() => {
    if (flash && flash.message) {
      toast.success(flash.message);
    }
  }, [flash]);

    return (
        <div>
      <Navbar expand="lg" className="bg-body-light bg-light">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </div>
    );
}
