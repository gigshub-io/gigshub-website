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
  });

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setNewUser({ ...newUser, firstName: value });
  };
  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setNewUser({ ...newUser, lastName: value });
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setNewUser({ ...newUser, email: value });
  };
  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setNewUser({ ...newUser, phoneNumber: value });
  };
  const handleMessageChange = (event) => {
    const value = event.target.value;
    setNewUser({ ...newUser, message: value });
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
              <label className="font-sans font-normal text-base text-dark-purple tracking-wide">
                First name *
              </label>
              <input
                required
                type="text"
                value={newUser.firstName}
                onChange={handleFirstNameChange}
                className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Last name *
              </label>
              <input
                required
                type="text"
                value={newUser.lastName}
                onChange={handleLastNameChange}
                className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
              ></input>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Email *
              </label>
              <input
                required
                type="email"
                value={newUser.email}
                onChange={handleEmailChange}
                className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Phone number
              </label>
              <input
                placeHolder="(__) ___-____"
                type="tel"
                value={newUser.phoneNumber}
                onChange={handlePhoneChange}
                className="border-2 border-light-purple rounded-lg p-3 w-input bg-transparent"
              ></input>
            </div>
          </div>
          <div className="flex flex-row gap-6 content-start">
            <div className="flex flex-col gap-2">
              <label className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Message
              </label>
              <textarea
                required
                type="text"
                value={newUser.message}
                onChange={handleMessageChange}
                className="border-2 border-light-purple rounded-lg p-3 w-contactUsForm h-contactUsMessage bg-transparent"
                placeHolder="Type your message here..."
              ></textarea>
            </div>
          </div>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
