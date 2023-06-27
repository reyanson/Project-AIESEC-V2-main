import React from "react";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1ygsu7c', 'template_g8pwf95', form.current, 'U0_D3jXnbM1yPEax-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
        );
        e.target.reset();
    };

    return (
        <section>
            <div className="container">
                <h2 className="--text-center"> Contact Us</h2>
                <form ref={form} onSubmit={sendEmail} className="--form-control--card--flex-center --dir-column">
                    <input type="text"
                    placeholder="Full Name"
                    name="user_name" required/> <br/>

                    <input type="email"
                    placeholder="Email"
                    name="user_email" required/> <br/>

                    <input type="text"
                    placeholder="Subject"
                    name="user_subject" required/> <br/>

                    <textarea name="message"
                    cols="25" rows="5"></textarea> <br/><br/>

                    <button type="submit" className="--btn-primary"> Send Message </button>
                </form>
            </div>
        </section>

    )
}

export default Contact;

