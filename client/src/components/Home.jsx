import React from 'react'
import Layout from './shared/Layout'
import Slider from 'react-slick';
import image1 from '../resources/desert.jpeg';
import image2 from '../resources/noodles.jpeg';
import image3 from '../resources/steak.jpeg';
import image4 from '../resources/strawberries.jpeg';
const Home = () => {
 const settings = {

 }
 return (
  <>
   <Layout >
    <Slider >


    </Slider>
    <div className="allrecipes">
     all recipes here
   </div>
   </Layout>


  </>
 )
}
export default Home;