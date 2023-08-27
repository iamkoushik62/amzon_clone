import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
     <div className="home">
      <div className="home_Container">
        <img className="home_image" src="https://s.hdnux.com/photos/01/22/16/43/21555441/4/rawImage.jpg" />
      <div className="home_row">
       <Product title="This is the books thats you can success" price={200} image="https://images.pexels.com/photos/2228581/pexels-photo-2228581.jpeg?auto=compress&cs=tinysrgb&w=600"/>
       <Product title="Apple iPhone 13 128 GB (Blue, 4 GB RAM)" price={62999} image="https://img4.gadgetsnow.com/gd/images/products/additional/large/G306150_View_1/mobiles/smartphones/apple-iphone-13-128-gb-blue-4-gb-ram-.jpg"/>
       
      </div>
      <div className="home_row">
      <Product title="Syska Polar, 1.32 IPS Display, BT Calling with In Built Memory for Offline Songs Smartwatch  (Blue Strap, Free Size)" price={3499} image="https://rukminim2.flixcart.com/image/416/416/l3t2fm80/smartwatch/l/v/n/33-52-sw300-android-ios-syska-yes-original-imageubmwecszh9d.jpeg?q=70"/>
      <Product title="HP 15s-Fq3071TU Intel Celeron N4500 15.6 Inches Entertainment Laptop (8GB/512GB SSD/Windows 11/Natural Silver/1.69 Kg)" price={32490} image="https://img6.gadgetsnow.com/gd/images/products/additional/large/G448534_View_1/computer-laptop/laptops/hp-15s-fq3071tu-intel-celeron-n4500-15-6-inches-entertainment-laptop-8gb-512gb-ssd-windows-11-natural-silver-1-69-kg-.jpg"/>

      <Product title="Sony Srs-Xb13 Wireless Extra Bass Portable Bluetooth Speaker with 16 Hours Battery Life, Type-C, Ip67 Waterproof, Dustproof, Speaker with Mic, Loud Audio for Phone Calls/Work from Home (Blue), Small" price={3497} image="https://m.media-amazon.com/images/I/61MosTpKiPL._SX466_.jpg"/>

      </div>

      <div className="home_row">
      <Product title="BoAt Airdopes 138 Bluetooth V5.0 In-Ear Truly Wireless Earbuds With Mic (Viper Green)" price={2299} image="https://img2.gadgetsnow.com/gd/images/products/additional/large/G449754_View_1/accessories/headphones-headsets/boat-airdopes-138-bluetooth-v5-0-in-ear-truly-wireless-earbuds-with-mic-viper-green-.jpg"/>
      </div>
      </div>
     </div>
    )
}
export default Home;