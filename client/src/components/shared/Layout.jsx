import React from 'react'
import Header from './Header';
import Footer from './Footer'
const Layout = (props) => {
 return (
  <>
   <div className="layout">
    <Header />
    <div className="layout--childeren">
     <p>props children here</p>
    </div>
   </div>
   <Footer />
  </>
 )
}
export default Layout