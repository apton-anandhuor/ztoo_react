import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Client() {
    return (
        <div>
            {/* <!-- CLIENT START --> */}
            <section className="section" id="client">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className=" text-center">
                                <h4 className="title-heading text-uppercase">Testimonial</h4>
                                <p className="title-desc text-muted mt-3">We craft digital, graphic and dimensional thinking, to
                                    create category leading brand experiences that have meaning and add a value.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-8">
                            <OwlCarousel className='owl-theme' loop margin={10} dots items={1} autoplay>
                                <div class='item'>
                                    <div className="testi-box">
                                        <div className="text-center mt-4">
                                            <div className="testi-content">
                                                <p className="user-review text-center mb-0">" My favourite aspect of Ztoo is its
                                                    approach. Rather than just performing operational tasks, these professionals
                                                    contribute their own ideas and thoughts as well. Highly recommended team! "</p>
                                            </div>
                                            <div className="img-post text-center">
                                                <p className="testi-patients text-muted mb-1 mt-3">Founder, Curry Factory</p>
                                                <h5 className="testi-client-name">Raghu.M</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div className="testi-box">
                                        <div className="text-center mt-4">
                                            <div className="testi-content">
                                                <p className="user-review text-center mb-0">" Their team of specialists is adept at
                                                    solving company bottlenecks. Now Marketing Analytics looks easy all thanks to
                                                    them!"</p>
                                            </div>
                                            <div className="img-post text-center">
                                                <p className="testi-patients text-muted mb-1 mt-3">CTO, Stealth Startup</p>
                                                <h5 className="testi-client-name">Christian.R</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- CLIENT END --> */}
        </div>
    )
}
