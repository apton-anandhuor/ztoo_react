import React from 'react'
import YouTube from '../assets/images/logo/YouTube.png'

export default function Footer() {
    return (
        <div>
            {/* <!-- FOOTER START --> */}
            <section className="footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-menu">
                                <h5 className="mb-4 text-uppercase">ZTOO</h5>
                                <p>The secret of getting ahead is getting started. Kick start your data-driven decisions with
                                    ZTOO Analytics</p>
                                <div className="text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AskZtoo"><i
                                        className="mdi mdi-twitter twitter footer_mdi"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ztoo"><img
                                        src={YouTube} width="36px" height="36px" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer-menu">
                                <h5 className="mb-4 text-uppercase">About</h5>
                                <ul className="text-muted list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Job Opening</a></li>
                                    <li><a href="#">Term</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer-menu">
                                <h5 className="mb-4 text-uppercase">Help Center</h5>
                                <ul className="text-muted list-unstyled">
                                    <li><a href="#contact">Accounting</a></li>
                                    <li><a href="#contact">Billing</a></li>
                                    <li><a href="#contact">General Question</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="footer-menu">
                                <h5 className="mb-4 text-uppercase">Contact us</h5>
                                <p>We are your trusted Data Analytics company enabling Data-to-decision with a mix of advanced
                                    analytics and the most modern technology.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mt-5">
                                <p className="mb-0">2023 © Ztoo Services LLC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* // < !--FOOTER END-- > */}
        </div>
    )
}
