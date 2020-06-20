import React from 'react'
import './shared.scss'
import logo from '../../resources/logo.svg'
const Footer = () => {
 return (
  <footer className="footer">
   <div className="footer--details">

    <img className="footer--logo" src={logo} alt="good cusine logo" height={"35px"} />

    <div className="footer--details-container ux-designers">
     <p className="footer--text">Designed by:</p>
     <ul className="footer--ul">
      <li className="footer--li">Kevin Chan</li>
      <li className="footer--li">Nico Quaratino</li>
      <li className="footer--li">Katherine Thomas</li>
      <li className="footer--li">Val Espadas</li>
     </ul>
    </div>

    <div className="footer--details-container sei-developers">
     <p className="footer--text">Developed by:</p>
     <ul className="footer--ul">
      <li className="footer--li">Johnathan Umana</li>
      <li className="footer--li">Christian Matos</li>
      <li className="footer--li">Jacky Chenlong Yang</li>
      <li className="footer--li">Scott Pick</li>
     </ul>
    </div>

    <p className="footer--siteTitle">Good Cuisine &copy; 2020</p>


   </div>
  </footer>
 )
}
export default Footer;