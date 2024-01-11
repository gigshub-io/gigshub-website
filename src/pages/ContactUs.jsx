import React, { useState } from "react";
import contactUsImg from "../assets/contactus-image.png";
import whiteCircle from "../assets/white-circle.svg";
import emailIcon from "../assets/email-icon.svg";
import { Button } from "../components/Button";

export default function ContactUs() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    termsChecked: false,
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setNewUser((prevUserData) => ({
      ...prevUserData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  let message = {
    from: "GigsHub <isadora.caputo@gmail.com>",
    to: `${newUser.firstName} <${newUser.lastName}>`,
    subject: "Fromageria Tesilli: Recebemos o seu pedido!",
    html: `<h2><b>Olá ${newUser.firstName}!</b></h2>
    <p>We have received your e-mail.</p>`,
  };

  // const info = await transporter.sendMail(message);
  const handleSubmit = (event) => {
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.email &&
      newUser.termsChecked
    ) {
      console.log(newUser); // nodemailer
    } else if (!newUser.termsChecked) alert("Please, accept Terms os Service.");
    else {
      alert("Please, fill in the required fields.");
    }
  };
  return (
    <div className="flex flex-row gap-20">
      <img src={contactUsImg} alt="Contact us" />
      <form className="flex flex-col px-14 py-20 gap-6 w-contactUsForm items-start">
        <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider">
          Dont't be shy, say <span className="text-light-purple">hello!</span>
        </div>
        <div className="flex flex-row gap-1.5 py-2.5 px-6 bg-washed-purple p-2 rounded-full font-sans text-base font-semibold leading-7 tracking-wide text-dark-purple text-center">
          <img src={whiteCircle} alt="White circle" />
          Book a call with us through{" "}
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline"
          >
            calendly
          </a>
        </div>
        <div className="flex flex-row gap-8 mb-8">
          <div className="flex flex-row gap-3.5 items-center">
            <div className="flex items-center justify-center bg-light-purple w-9 h-9 rounded-full w-p-1.5">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="font-sans font-normal text-lg text-dark-purple">
              hello@gigshub.io
            </div>
          </div>
          <div className="flex flex-row gap-3.5 items-center">
            <div className="flex items-center justify-center bg-light-purple w-9 h-9 rounded-full w-p-1.5">
              <img src={emailIcon} alt="Email Icon" />
            </div>
            <div className="font-sans font-normal text-lg text-dark-purple">
              hello@gigshub.io
            </div>
          </div>
        </div>
        <div className="font-sans font-bold text-4xl text-dark-purple tracking-wide">
          Send us a message
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="flex flex-col gap-2 font-sans font-normal text-base text-dark-purple tracking-wide">
                First name *
                <input
                  required
                  type="text"
                  name="firstName"
                  value={newUser.firstName}
                  onChange={handleChange}
                  className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
                ></input>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col gap-2 font-sans font-normal text-base text-dark-purple tracking-wide">
                Last name *
                <input
                  required
                  type="text"
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleChange}
                  className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
                ></input>
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="flex flex-col gap-2 font-sans font-normal text-base text-dark-purple tracking-wide">
                Email *
                <input
                  required
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
                ></input>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex flex-col gap-2 font-sans font-normal text-base text-dark-purple tracking-wide">
                Phone number
                <input
                  placeholder="(__) ___-____"
                  type="tel"
                  name="phoneNumber"
                  value={newUser.phoneNumber}
                  onChange={handleChange}
                  className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
                ></input>
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-6 content-start">
            <div className="flex flex-col gap-2">
              <label className="flex flex-col gap-2 font-sans font-normal text-base text-dark-purple tracking-wide">
                Message
                <textarea
                  required
                  type="text"
                  name="message"
                  value={newUser.message}
                  onChange={handleChange}
                  className="border-2 border-light-purple rounded-lg p-3 w-contactUsForm h-contactUsMessage bg-transparent"
                  placeholder="Type your message here..."
                ></textarea>
              </label>
            </div>
          </div>
        </div>
        <label className="flex flex-row font-sans text-sm font-normal text-dark-purple">
          <input
            required
            className="mr-2 accent-light-purple"
            type="checkbox"
            name="termsChecked"
            onChange={handleChange}
            id="terms"
          ></input>
          I accept the
          <a
            href="TermsOfService"
            target="_blank"
            rel="noreferrer"
            className="ml-1 font-bold underline"
          >
            Terms
          </a>
        </label>
        <div>{console.log(newUser)}</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}
