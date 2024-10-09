import React from 'react'
import "./Footer.css"
import Logto1 from "../../images/Logo (1).png"
import sosmed from "../../images/sosmed.png"

const Footer = () => {
    return (

        <section1 class="footer">
            <div class="footer-content">
                <img src={Logto1} alt="" />
                <div class="icon">
                    <h3>Dhaka, Bangladesh</h3>
                    <h3>0943833399</h3>
                    <h3>support@zone.com</h3>
                </div>
                <div class="icons">
                    <img src={sosmed} alt="" />
                </div>
            </div>
            <div class="footer-content">
                <h2>Service</h2>
                <p>Order Management</p>
                <p>Social Assistant</p>
                <p>Crypto Platform</p>
                <p>Analyzer of the News</p>
            </div>
            <div class="footer-content">
                <h2>Company</h2>
                <p>About Us</p>
                <p>News</p>
                <p>Our trusted partner</p>
                <p>New users FAQ</p>
            </div>
            <div class="footer-content">
                <h2>Supports</h2>
                <p>Help center</p>
                <p>Feedbcak</p>
                <p>Contact us</p>
                <p>Terms conditins</p>
            </div>
            <div class="footer-content">
                <h2>Resources</h2>
                <p>Download app</p>
                <p>Blog</p>
                <p>What’s new</p>
                <p>Sitemap</p>
            </div>
        </section1>

    )
}

export default Footer