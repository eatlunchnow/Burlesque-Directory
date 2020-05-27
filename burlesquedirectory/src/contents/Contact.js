import React from 'react';
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Content from "../components/Content";



function Contact(props) {
   
        return (
            <div>
                <Hero title={props.title} />
                <Content>
                    <p>You can get in touch by e-mailing us at burlesquedirectorycontact@gmail.com or fill out the form below</p>
            <ContactForm />
            </Content>
            </div>
            )
        }
    

/* class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1>Contact</h1>
            <h3>If you would like to contact us please email us at burlesquedirectorycontact@gmail.com or fill
              out the form. 
            </h3>
            <ContactForm />

            </div>
            )
        }
    } */
    
    export default Contact;