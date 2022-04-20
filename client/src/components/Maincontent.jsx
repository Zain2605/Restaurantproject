import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Maincontent.css'
export default function Maincontent() {
  return (
    <>
      <div>
      <div id="main-content" className="container-fluid ">
    

    <div id="home-tiles" className="row ">
      <div className="col-md-4 col-sm-6 col-xs-12">
        {/* <a href="menu-categories.html"><div id="menu-tile"><span>menu</span></div></a> */}
        
          {/* <span>menu</span> */}
          {/* <NavLink to="/menu"><span>menu</span></NavLink> */}
          <nav>
            <Link to="/menu"><div id="menu-tile"><span>menu</span></div></Link>
          </nav>
         {/* <NavLink to={"/menu"} Menu /> */}
         {/* </div> */}
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <a href="single-category.html"><div id="specials-tile"><span>specials</span></div></a>
      </div>
      <div className="col-md-4 col-sm-12 col-xs-12">
        <a href="https://goo.gl/maps/WsEuviPPg71JjYXW7" target="_blank" rel="noopener noreferrer">
          <div id="map-tile">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.622934843035!2d73.8774587!3d18.5218633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa422fee8ff1347dd!2sBlue%20Nile%20Restaurant!5e0!3m2!1sen!2sin!4v1649935178091!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
            {/* <NavLink to={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.622934843035!2d73.8774587!3d18.5218633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa422fee8ff1347dd!2sBlue%20Nile%20Restaurant!5e0!3m2!1sen!2sin!4v1649935178091!5m2!1sen!2sin"}></NavLink> */}
            <span>map</span>
          </div>
        </a>
      </div>
    </div>
  </div>
      </div>
    </>
  
  )
}
