import { useEffect, useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import logo from "../../images/logo.png";
import Team from "../../images/social.svg";
import Calender from "../../images/sceduled.svg";
import Projects from "../../images/starred.svg";
import Documents from "../../images/labicon.png";
import styled from "styled-components";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from "../../images/profile.png"
// import toast from "react-hot-toast";
import "./AuthenticatedLayout.css"
import { Link, useForm, usePage } from '@inertiajs/react';
import { AnimatePresence } from "framer-motion";
import toast from 'react-hot-toast';
const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;
  border: none;
  &:hover {
    color: #aaa;
    border-bottom: none;
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  padding: 0.5rem 3rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding-left: 2px;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Pages = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #00a300 30%, #009900 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export default function Authenticated({ user, header = null, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const {post} = useForm();
    const { flash } = usePage().props;
    useEffect(() => {
      if (flash && flash.message) {
        toast.success(flash.message);
      }
    }, [flash]);
  
  const handleClick = () => setClick(!click);
  const handleLogout = (e) => {
      e.preventDefault();
      post(route('logout'))
  };

    return (
        
        <div className="min-h-screen bg-gray-100">
            <div style={{ width: "100vw !important" }}>
      <Container className="">
        <Button clicked={click} onClick={() => handleClick()}>
          <DragHandleIcon />
        </Button>
        <SidebarContainer>
        <Link className='p-1' method='get' href={route('dashboard')} active={route().current('dashboard')}>
            <img src={logo} alt="logo" width={"50px"}/>
                                </Link>
          
          <SlickBar clicked={click}>
            <Item
              onClick={() => setClick(false)}
              exact
              activeClassName="active"
              href={route('profile.edit')}
            >
              <img src={Home} alt="Home" />
              <Text clicked={click}>{user.name}</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/team"
            >
              <img src={Team} alt="Team" />
              <Text clicked={click}>Team</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/calender"
            >
              <img src={Calender} alt="Calender" />
              <Text clicked={click}>Calender</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/experiments"
            >
              <img src={Documents} alt="labicon" style={{ fontWeight: 900 }} />
              <Text clicked={click}>Experiments</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/projects"
            >
              <img src={Projects} alt="Projects" />
              <Text clicked={click}>Projects</Text>
            </Item>
            <Item
              activeClassName="active"
              className="text-danger"
              id="logout"
              onClick={handleLogout}
            >
                <LogoutIcon />
              <Text clicked={click}>Logout</Text>

              
            </Item>
          </SlickBar>
        </SidebarContainer>
        
      </Container>
      <Pages className='container'>
            <AnimatePresence mode="wait">
            <div>{children}</div>
            </AnimatePresence>
            </Pages>
    </div>
    
        </div>

    );
}

