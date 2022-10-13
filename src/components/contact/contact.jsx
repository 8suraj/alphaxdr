import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9kri04k',
        'template_7uahqnl',
        form.current,
        'Q7H_ZS8bB6a35MpcTGU1g',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="contactr">
      <h1 className="gradient__text">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">
          Name
          <input placeholder="Name" type="text" name="user_name" />
        </label>
        <label htmlFor="user_email">
          Email
          <input placeholder="Email" type="email" name="user_email" />
        </label>
        <label htmlFor="user_subject">
          Subject
          <input placeholder="Subject" type="subject" name="user_subject" />
        </label>
        <label htmlFor="message" className="card">
          Message
          <textarea placeholder="Message.." name="message" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

// Styles
// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: black solid 1px;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//         outline: none;
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: black solid 1px;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         outline: none;
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     label {
//       margin-top: 1rem;
//     }

//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
