import React from 'react'
import Link from 'gatsby-link'

const ContactsPage = () => (
  <div>
    <div className="containerC">
      <form id="contact"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post">
        <h3>Contact Form</h3>
        <h4>Contact us for all and any enquiry concerning the Ministry</h4>

        <fieldset>
        <input name="name" placeholder="Your Name" type="text" tabindex="1" required autofocus/>
        </fieldset>
        <fieldset>
        <input name="email" placeholder="Your Email Address" type="email" tabindex="2" required/>
        </fieldset>
        <fieldset>
        <input name="phone" placeholder="Your Phone Number (Optional)" type="tel" tabindex="3" required/>
        </fieldset>
        <fieldset>
          <textarea placeholder ="Type your message here...." tabindex ="4"
            required> </textarea>
        </fieldset>
        <fieldset>
          <button name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"> Submit </button>
          </fieldset>
      </form>
    </div>
  </div>
)

export default ContactsPage
