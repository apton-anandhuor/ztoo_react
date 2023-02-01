import React, { useState } from 'react'
import { db } from '../firebase'
import { set, ref } from 'firebase/database'
import { uid } from "uid"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            subject: "",
            comments: ""
        }
    )

    function handleChange(event) {
        const { name, value, type } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const uuid = uid()
        set(ref(db, `/${uuid}`), {
            formData,
            uuid,
        });

        setFormData({
            name: "",
            email: "",
            subject: "",
            comments: ""
        })

        // Toast Emitter
        toast.success('Message Sent Successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div>
            {/* <!-- CONTACT START --> */}
            <section className="section" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="contact-head text-center">
                                <h4 className="title-heading text-uppercase">Contact us</h4>
                                <p className="title-desc text-muted mt-3">Find the perfect analytics partner for all your questions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 vertical-content">
                        <div className="col-lg-12">
                            <div className="row mt-5">

                                <div className="col-lg-4">
                                    <div className="contact-info">
                                        <div className="mt-3">
                                            <div className="float-left">
                                                <i data-feather="mail"></i>
                                            </div>
                                            <div className="ml-5">
                                                <h6 className="text-muted">Email Address</h6>
                                                <p>raj@ztoo.services</p>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="float-left">
                                                <i data-feather="map-pin"></i>
                                            </div>
                                            <div className="ml-5">
                                                <h6 className="text-muted">Office Locations</h6>
                                                <p> Silicon Valley, California<br />
                                                    Chennai, India (Launching Soon) </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="custom-form">
                                        <div id="message"></div>
                                        <form name="contact-form" id="contact-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Your name..."
                                                            onChange={handleChange}
                                                            value={formData.name}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input
                                                            name="email"
                                                            id="email"
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Your email..."
                                                            onChange={handleChange}
                                                            value={formData.email}
                                                            required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input
                                                            name="subject"
                                                            id="sub"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Your subject..."
                                                            required
                                                            onChange={handleChange}
                                                            value={formData.subject} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            name="comments"
                                                            id="comments"
                                                            rows="4"
                                                            className="form-control"
                                                            placeholder="Your message..."
                                                            required
                                                            onChange={handleChange}
                                                            value={formData.comments}
                                                        >
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-lg-12">
                                                    <input type="submit" id="submit" name="send"
                                                        className="submitBnt btn btn-custom" value="Send Message" />
                                                    <div id="simple-msg"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- CONTACT END --> */}

            {/* Toast Message Container */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
