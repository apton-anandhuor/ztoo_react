import React from 'react'
import work1 from '../assets/images/portfolio/work-1.jpg'
import work2 from '../assets/images/portfolio/work-2.jpg'
import work3 from '../assets/images/portfolio/work-3.jpg'
import work4 from '../assets/images/portfolio/work-4.jpg'
import work5 from '../assets/images/portfolio/work-5.jpg'
import work6 from '../assets/images/portfolio/work-6.jpg'
import work7 from '../assets/images/portfolio/work-7.jpg'
import work8 from '../assets/images/portfolio/work-8.jpg'

export default function Portfolio() {
    return (
        <div>
            {/* <!-- PORTFOLIO START--> */}
            <section className="section bg-white pb-0" id="portfolio">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <h4 className="title-heading text-uppercase">Our Portfolio</h4>
                                <p className="title-desc text-muted mt-3">We specialize in finding the needle in the haystack. Our
                                    out-of-box solutions will enable you to quickly adopt data driven decisions from scratch
                                    across any vertical</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- portfolio menu --> */}
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <ul className="col container-filter categories-filter list-unstyled mb-0" id="filter">
                                    <li><a className="categories active" data-filter="*">All</a></li>
                                    <li><a className="categories" data-filter=".e-commerce">e-commerce</a></li>
                                    <li><a className="categories" data-filter=".marketing">Marketing</a></li>
                                    <li><a className="categories" data-filter=".restaurant">Restaurant</a></li>
                                    <li><a className="categories" data-filter=".utilities">Utilities</a></li>
                                    <li><a className="categories" data-filter=".iot">IOT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End portfolio  --> */}

                </div>

                {/* <!-- Gallary --> */}
                <div className="container-fluid">
                    <div className="row container-grid mt-5 projects-wrapper">
                        <div className="img-max-width e-commerce">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="../assets/images/portfolio/work-1.jpg" title="Shopify Analytics">
                                    <img className="item-container profile business" src={work1} alt="1" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Shopify Store Analytics</h5>
                                            <p className="text-muted">Analyze and improve key metrics for your shopify store</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width restaurant">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-8.jpg" title="Restaurant">
                                    <img className="item-container mfp-fade" src={work8} alt="2" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Restaurant Analytics</h5>
                                            <p className="text-muted">Analyze POS system data to improve efficiency</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width e-commerce marketing restaurant">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-3.jpg" title="Customer 360">
                                    <img className="item-container" src={work3} alt="3" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Customer Analytics</h5>
                                            <p className="text-muted">Discover customer behavior and trends</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width marketing">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-2.jpg"
                                    title="Social Media Marketing">
                                    <img className="item-container" src={work2} alt="4" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Social Media Analytics</h5>
                                            <p className="text-muted">Analyze KPIs of Marketing Campaigns to increase revenue growth
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width iot">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-6.jpg" title="IOT">
                                    <img className="item-container" src={work6} alt="5" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Internet of Things</h5>
                                            <p className="text-muted">Industrial IOT sensor data analytics</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width iot utilities">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-5.jpg" title="Clean Energy">
                                    <img className="item-container" src={work5} alt="6" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Clean Energy</h5>
                                            <p className="text-muted">Accelerate adoption of clean energy</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width iot utilities">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-7.jpg" title="EV">
                                    <img className="item-container" src={work7} alt="7" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">EV Analytics</h5>
                                            <p className="text-muted">Manage EV fleet and V2X capabilities</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="img-max-width marketing e-commerce">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/work-4.jpg" title="Ads">
                                    <img className="item-container" src={work4} alt="8" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="text-dark">Digital Ads Analytics</h5>
                                            <p className="text-muted">Optimize ad spend and customer acquisition</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- PORTFOLIO END--> */}
        </div>
    )
}
