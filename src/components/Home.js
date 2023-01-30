import React from 'react'

export default function Home() {
    return (
        <div>
            {/* <!-- HOME START--> */}
            <section className="section bg-home bg-home-2" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="mb-4">
                                        <i data-feather="layers" className="text-custom"></i>
                                    </div>
                                    <h5 className="home-small-title text-uppercase text-muted mb-4">ZTOO Analytics</h5>
                                    <h2 className="home-title">Analytics Made Easy</h2>
                                    <p className="home-desc mx-auto mt-3">We help teams create change that matters, from zero to one
                                    </p>
                                    <div className="text-center subcribe-form mt-5">
                                        <form>
                                            <input type="text" placeholder="E-mail" id="subEmail" />
                                            <button type="submit" className="btn btn-custom" onClick="subscribe();">SEE THE
                                                DEMO</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- HOME END--> */}
        </div>
    )
}
