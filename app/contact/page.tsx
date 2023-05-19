
'use client';

import { useState } from "react";

function Contact() {

  const [email, setEmail] = useState('');


  const handleSubmit = async (e) => {
      e.preventDefault();

      await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({
          email
        }),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      })

      console.log('Submitted..')
  }
  return <>Contact me...
    <form onSubmit={handleSubmit}>
    <input type="text"  value={email} onChange={e => setEmail(e.target.value)}  required/>
  <button type="submit" >Submit</button>
    </form>
  </>;
}

export default Contact;
