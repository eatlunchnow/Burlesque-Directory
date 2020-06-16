import React, { useState } from 'react'
import { Axios } from "../firebase/firebaseConfig";



const ContactForm = () => {

  const [formData, setFormData] = useState({}) 

  
  const updateInput = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      formData({
        name: '',
        email: '',
        message: ''
      })
    }
}

  const handleSubmit = event => {
    // alert("Message sent")
    event.preventDefault();
    setServerState({ submitting: true })
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    
  }


  const sendEmail = () => {
    
    
    Axios.post(
      'https://us-central1-burlesquedirectory-6e6d1.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        handleServerResponse(true, "Thank you! We will be in touch soon.")
      })
      .catch(res => {
        handleServerResponse(false, res.response.data.error)
      })
      .catch(error => {
        console.log(error)
      })
     }

     

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit" disabled={serverState.submitting}>Submit</button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </>
  )
}
    
export default ContactForm