
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='foot-container'>
                <div className='Sub-cont1'>
                    <h1><span className="vertical">The</span> Siren</h1>
                    <p>All in one blog, bringing you the best of entertainment,knowledge and inspiration.</p>
                    <p>&copy; {new Date().getFullYear()} The Siren. All rights reserved.</p>
                </div>
                <br/>
                <div className='Sub-cont2'>
                <h3>Contact Us</h3>
                  <p>Phone: 123-456-7890</p>
                  <p>Email: support@thesiren.com</p>
                  <p>401 Ganesh colony, Mumbai, Maharashtra.</p>
                </div>
                <br/>
                <div className='Sub-cont3'>
                <h3>References</h3>
           <ul >
               <li>Bollywood</li>
               <li>Hollywood</li>
               <li>Technology</li>
               <li>Fitness</li>
               <li>Food</li>
           </ul>
                </div>
            </div>
        </>
    );
}
export default Footer;