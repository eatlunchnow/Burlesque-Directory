import React, { Component } from 'react';
import ContactForm from "../components/ContactForm";

class Contact extends Component {
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
    }
    
    export default Contact