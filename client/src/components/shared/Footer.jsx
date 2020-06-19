import React from 'react'

const Footer = () => {
 return (
  <footer className="footer">
   <div className="footer--details">
    <p className="footer--siteTitle">Good Cuisine</p>
    {/* <p className="footer--text">designed by:</p> */}
    <ul className="footer--ul ux-designers">
     <p className="footer--text">designed by:</p>
     <li className="footer--li">Kevin Chan</li>
     <li className="footer--li">Nico Quaratino</li>
     <li className="footer--li">Katherine Thomas</li>
     <li className="footer--li">Val Espadas</li>
    </ul>
    {/* <p className="footer--text">developed by:</p> */}
    <ul className="footer--ul sei-developers">
     <p className="footer--text">developed by:</p>
     <li className="footer--li">Johnathan Umana</li>
     <li className="footer--li">Christian Matos</li>
     <li className="footer--li">Jacky Chenlong Yang</li>
     <li className="footer--li">Scott Pick</li>
    </ul>
   </div>
  </footer>
 )
}
export default Footer;