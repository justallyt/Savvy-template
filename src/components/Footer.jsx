import React from 'react'
import footerlogo from "../assets/footer-logo.png"

const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                     <div className="footer-content">
                             <div className="footer-column">
                                     <div className="footer-logo">
                                             <img src={footerlogo} alt="" />
                                     </div>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, vitae nulla facilisi nunc mattis. Amet, morbi viverra cursus urna quis pretium pellentesque.</p>
                                     <div className="footer-social-links">
                                            <a href="s"><span><ion-icon name="logo-facebook"></ion-icon></span></a>
                                            <a href="s"><span><ion-icon name="logo-twitter"></ion-icon></span></a>
                                            <a href="s"><span><ion-icon name="logo-instagram"></ion-icon></span></a>
                                             <a href="s"><span><ion-icon name="logo-linkedin"></ion-icon></span></a>
                                     </div>
                             </div>

                             <div className="footer-column">
                                     <div className="footer-title"> 
                                             <h2>Quick Contact</h2>
                                       </div>
                                       <ul>
                                                    <li>
                                                         <span><ion-icon name="pin"></ion-icon></span>
                                                         Callison Laney Buoy Building
                                                           W 13th Parks Suite 559, Denver
                                                    </li>
                                                    <li>
                                                          <span><ion-icon name="business"></ion-icon></span>
                                                          Office 478 Vienna, AU 92101
                                                    </li>
                                                    <li>
                                                           <span><ion-icon name="call"></ion-icon></span>
                                                            +0 (555) 123 45 67
                                                    </li>
                                                    <li>
                                                           <span><ion-icon name="mail"></ion-icon></span>
                                                           support@amariconsult.com
                                                    </li>
                                             </ul>
                             </div>
                             <div className="footer-column">
                                     <div className="footer-title">
                                              <h2>Quick Links</h2>
                                     </div>
                                     <ul>
                                           <li><a href="s">About Company</a></li>
                                           <li><a href="s">Angle Investors</a></li>
                                           <li><a href="s">Our Clients</a></li>
                                           <li><a href="s">Legal Information</a></li>
                                           <li><a href="s">Portfolio</a></li>
                                           <li><a href="s">Terms of Services</a></li>
                                     </ul>
                             </div>
                             <div className="footer-column">
                                     <div className="footer-title">
                                              <h2>Services</h2>
                                     </div>
                                     <ul>
                                           <li><a href="s">Website Design</a></li>
                                           <li><a href="s">Digital Marketing</a></li>
                                           <li><a href="s">Brand Campaigns</a></li>
                                           <li><a href="s">SEO</a></li>
                                           <li><a href="s">Information Targeting</a></li>
                                           <li><a href="s">Mobile Development</a></li>
                                     </ul>
                             </div>
                     </div>

                     <div className="copyright-section">
                               <p>Copyright &copy; { new Date().getFullYear() } . Amari Consulting Ltd</p>

                               <div className="copyright-policy">
                                       <a href="s">Privacy Policy</a>
                                       <a href="s">Terms & Conditions</a>
                                       <a href="s">Legal Info</a>
                               </div>
                     </div>
             </div>
    </footer>
  )
}

export default Footer