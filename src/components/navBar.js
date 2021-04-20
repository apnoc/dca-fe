import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './navBar.css';



const navBar = () => {
    return ( 
      <div className="Header__Section" >  
          <section className=" p-5">
          <section className="container ">         
                <div  className="box">
                      <div>
                        <img  width="100rem" border-radius="50rem" src="/assets/index1.jpg" alt="logo1" /> 
                      </div>
                      <div  class="selected">
                        <h2> DRUGS CONTROL ADMINISTRATION</h2>
                        <h5>Government Of Andhra Pradesh</h5>
                      </div>
                      <div>
                        <img  width="160rem" height="80rem" src="/assets/index2.jpg" alt="logo2" /> 
                      </div>
                </div> 
                </section>                    
              </section>
                                    
              <Navbar className="navbar"  expand="md" >
              <div className="container">
                  <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                  <Navbar.Collapse id="basic-navbar-nav " >
                    <Nav className="nav-item mr-auto px-4 py-3  ">
                      <Nav.Link href="/home">Home</Nav.Link>            
                      <Nav.Link href="/aboutUs">About Us</Nav.Link>
                      <Nav.Link href="/services">Services </Nav.Link>            
                      <Nav.Link href="/rtiAct">RTI ACT</Nav.Link>
                      <Nav.Link href="/onlineSalesLicensingSystem">Online Sales Licensing System</Nav.Link>             
                      <Nav.Link href="/procedureForLicenses">Procedure For Licenses</Nav.Link>
                      <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </div>
          </Navbar>          
     </div>
    );
}
 
export default navBar;
