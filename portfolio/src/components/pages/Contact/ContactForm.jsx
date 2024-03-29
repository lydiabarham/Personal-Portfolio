import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import "./styleContact.css";

{/*Personal keys needed for emailjs */} 
const REACT_APP_SERVICE_ID = "service_sh4ltnd";
const REACT_APP_TEMPLATE_ID = "template_w2t16fj";
const REACT_APP_PUBLIC_KEY = "a4bYZAAuidl7Hx79U";

{/*Create Contact Form Component */} 
const ContactForm = () => {
  {/*define useForm function */} 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  {/*manage useState and form submissions/timeout*/} 
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  {/*define onSubmit function */} 
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_PUBLIC_KEY
      );

      {/*alert user of success/error*/} 
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  {/*write form component*/} 
  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                      {...register('name', { required: true })}
                    />
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                      {...register('email', { required: true })}
                    />
                  </div>
                </div>
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                      {...register('subject', { required: true })}
                    />
                  </div>
                </div>
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                      {...register('message', { required: true })}
                    />
                  </div>
                </div>
                <button className='submit-btn' type='submit' disabled={disabled}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*write alert compontent*/} 
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            }
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;