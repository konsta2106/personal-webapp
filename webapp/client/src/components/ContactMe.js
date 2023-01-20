import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, reset) => {
    sendEmail(
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }
    );
    reset.target.reset();
  };

  const sendEmail = async (templateData) => {
    console.log(form.current);
    const result = await axios.post('/api/email', templateData)
    if (result && result.status === 200) {
      console.log(result)
      setSuccessMessage("Form sent successfully!")
    } else {
      setSuccessMessage('')
    }
  };

  return (
    <div id="contact" className="contacts bg-dark">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>Please fill out the form and I will reply as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="line"></div>
              {/* name */}
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              {errors.name && <p className="error-message">Name is required</p>}
              {/* phone */}
              <div className="line"></div>
              <input
                id="phone"
                type="phone"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="error-message">Phone is required</p>
              )}
              {/* email */}
              <div className="line"></div>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="error-message">Email is required</p>
              )}
              {/* subject */}
              <div className="line"></div>
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <p className="error-message">Subject is required</p>
              )}
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* description */}
              <div className="line"></div>
              <textarea
                id="message"
                type="text"
                className="form-control"
                placeholder="Message"
                name="message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="error-message">Message is required</p>
              )}
              <div className="line"></div>
              <button className="btn btn-contact-me contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe