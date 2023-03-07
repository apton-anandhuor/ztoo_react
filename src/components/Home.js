import React, { useState } from 'react'
import { db } from '../firebase'
import { set, ref, push } from 'firebase/database'
import { uid } from "uid"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import ReactGA from "react-ga4"


export default function Home() {

    const formRef = useRef();
    const [subFormData, setSubFormData] = useState(
        {
            to_email: "",
        }
    )

    function handleChange(event) {
        const { name, value } = event.target
        setSubFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        const identifier = "subscriberData";
        const today = new Date().toISOString().slice(0, 10);

        const subscriberDataRef = ref(db, `subscriberData/${today}`);

        push(subscriberDataRef, {
            to_email: subFormData.to_email
        });
        
        // const uuid = uid()
        // set(ref(db, `/${identifier}/${uuid}`), {
        //     subFormData
        // });

        // emailjs

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_SUB_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                // Toast Emitter
                toast.success('Subscribed Successfully!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(result.text);
            }, (error) => {
                // Toast Emitter
                toast.error('An Error Occured!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(error.text);
            });

        setSubFormData({
            to_email: "",
        })
    }

    const onclick = () => {
        ReactGA.event({
            action: 'login_action',
            category: 'login_ctegory',
            label: 'login_label',
            value: 'xxxxx'
        })
    }

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
                                        <form onSubmit={handleSubmit} ref={formRef}>
                                            <input
                                                type="email"
                                                placeholder="E-mail"
                                                id="subEmail"
                                                name="to_email"
                                                onChange={handleChange}
                                                value={subFormData.to_email}
                                                required />
                                            <button type="submit" className="btn btn-custom" onClick={onclick}>SEE THE
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
