import React from 'react'

export default function Welcome() {
    return (
        <div>
            {/* <!-- WELCOME START --> */}
            <section className="section" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center">
                                <h4 className="title-heading">Our solution for your business</h4>
                                <p className="title-desc text-muted mt-3">We provide both the tools and talent to accelerate your
                                    journey from data to decisions</p>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-lg-4">
                            <div className="features-box mt-4">
                                <div className="media">
                                    <div className="features-icon text-center">
                                        <i className="uil uil-cloud-database-tree"></i>
                                    </div>
                                    <div className="media-body ml-4">
                                        <h5 className="mt-0 f-19">Data warehouse modernization</h5>
                                        <p className="text-muted">
                                            Build/Migrate enterprise data warehouse
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="features-box mt-4">
                                <div className="media">
                                    <div className="features-icon text-center">
                                        <i className="uil uil-hard-hat"></i>
                                    </div>
                                    <div className="media-body ml-4">
                                        <h5 className="mt-0 f-19">Data Engineering</h5>
                                        <p className="text-muted" align="justify">
                                            Data discovery and standardization services with modern ELT pipelines to accelerate
                                            data to decision
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="features-box mt-4">
                                <div className="media">
                                    <div className="features-icon text-center">
                                        <i className="uil uil-chart"></i>
                                    </div>
                                    <div className="media-body ml-4">
                                        <h5 className="mt-0 f-19">Data Visualization</h5>
                                        <p className="text-muted" align="justify">
                                            Empower teams with best-in-className reports and self-serve Visualization tools
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-lg-4">
                            <div className="features-box mt-4">
                                <div className="media">
                                    <div className="features-icon text-center">
                                        <i className="uil uil-align-alt"></i>
                                    </div>
                                    <div className="media-body ml-4">
                                        <h5 className="mt-0 f-19">Streaming Analytics</h5>
                                        <p className="text-muted" align="justify">
                                            Ingest, process, and analyze event driven data streams to effect real-time decisions
                                            and behavioral change
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="features-box mt-4">
                                <div className="media">
                                    <div className="features-icon text-center">
                                        <i className="uil uil-brain"></i>
                                    </div>
                                    <div className="media-body ml-4">
                                        <h5 className="mt-0 f-19">Data Science</h5>
                                        <p className="text-muted" align="justify">
                                            Build and deploy machine learning models to extract insights from data using
                                            predictive analytics and artificial intelligence (AI)
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="features-box mt-4">
                                <div className="media">
                                    <div className="features-icon text-center">
                                        <i className="uil uil-compress-arrows"></i>
                                    </div>
                                    <div className="media-body ml-4">
                                        <h5 className="mt-0 f-19">Business Intelligence</h5>
                                        <p className="text-muted" align="justify">
                                            Develop strategies to put data at the heart of your business transformation by using
                                            data to inform or automate decisions
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- WELCOME END --> */}
        </div>
    )
}
