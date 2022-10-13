import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import validator from 'validator';
import Popup from '../popup/popup';
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputSubject, setTextInputSubject] = useState('');
  const [textInputMessage, setTextInputMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    const email = e;

    if (validator.isEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handleChangeName = (event) => {
    setTextInputName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setTextInputEmail(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setTextInputSubject(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setTextInputMessage(event.target.value);
  };

  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Your Name');
      return;
    }
    if (!textInputSubject.trim()) {
      alert('Please Enter The Subject');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Your Correct Email');
      return;
    }
    if (!textInputMessage.trim()) {
      alert('Please Enter The Message');
      return;
    }
    validateEmail(textInputEmail);
    if (!emailError) {
      alert('Please Enter Email correctly.');
      return;
    }
    setModalOpen(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9kri04k',
        'template_7uahqnl',
        form.current,
        'Ddb9iGxAKJMxYymet',
      )
      .then(
        (result) => {
          console.log(result);
          setMessage('Thank You For Contacting Us.We will get back to you.');
        },
        (error) => {
          console.log(error);
          setMessage('Failed!Please try again...');
        },
      );
  };

  return (
    <div className="contactr">
      <h1 className="gradient__text">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">
          Name
          <input
            required
            placeholder="Name"
            type="text"
            name="user_name"
            onChange={
              handleChangeName
          }
          />
        </label>
        <label htmlFor="user_email">
          Email
          <input
            required
            placeholder="Email"
            type="email"
            name="user_email"
            onChange={
              handleChangeEmail
          }
          />
        </label>
        <label htmlFor="user_subject">
          Subject
          <input
            required
            placeholder="Subject"
            type="subject"
            name="user_subject"
            onChange={
              handleChangeSubject
          }
          />
        </label>
        <label
          required
          htmlFor="message"
          className="card"
          onChange={
            handleChangeMessage
        }
        >
          Message
          <textarea placeholder="Message.." name="message" />
        </label>
        <input
          type="submit"
          value="Send"
          onClick={checkTextInput}
        />
        {modalOpen && <Popup setOpenModal={setModalOpen} message={message} />}
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
