import e from 'express';
import React, { useState } from 'react';

const { name, email, message } = formState;
setFormState({ ...formState, [e.target.name]: e.target.value })(
  <input type='text' defaultValue={name} onChange={handleChange} name='name' />
),
  (
    <input
      type='email'
      defaultValue={email}
      name='email'
      onChange={handleChange}
    />
  ),
  (
    <textarea
      name='message'
      defaultValue={message}
      onChange={handleChange}
      rows='5'
    />
  );

const [formState, setFormState] = useState({
  name: '',
  email: '',
  message: '',
});

function ContactForm() {
  function handleChange(e) {
    setFormState({ ...formState, name: e.target.value });
  }

  console.log(formState);
  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form'>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' rows='5' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
