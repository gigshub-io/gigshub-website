import React, { useState } from "react";
import emailjs from "emailjs-com";
import contactUsImg from "../assets/contactus-image.png"; 
import emailIcon from "../assets/email-icon.svg";          // optional if you still need it
// import { Button } from "../components/Button";           // If you have a separate Button component

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // EmailJS configuration
    const serviceId = "service_we8syma";
    const templateId = "template_okyprlc";
    const userId = "8UW6JcM2B69OkPyjQ";

    const templateParams = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      message: newUser.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Don’t be shy, say <span className="text-[#3F33C0]">hello!</span>
        </h1>

        {/* Subtitle or short intro */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          We value your feedback and inquiries. Fill out the form below and 
          we’ll get back to you as soon as possible.
        </p>

        {/* Optional “Book a call” CTA */}
        <div className="mt-6 inline-flex items-center justify-center gap-3 px-6 py-2 bg-gray-200 rounded-full">
          <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
          <span className="text-gray-600">
            Book a call with us via{" "}
            <a
              href="https://calendly.com/bbrazthiago/30min"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline text-[#3F33C0]"
            >
              Calendly
            </a>
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10 px-4">
        {/* Optionally show a contact image */}
        
        
       

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="font-semibold text-gray-700"
              >
                First name *
              </label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                value={newUser.firstName}
                onChange={handleChange}
                className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3F33C0]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="font-semibold text-gray-700"
              >
                Last name *
              </label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                value={newUser.lastName}
                onChange={handleChange}
                className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3F33C0]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold text-gray-700">
                Email *
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={newUser.email}
                onChange={handleChange}
                className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3F33C0]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="font-semibold text-gray-700"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={newUser.phoneNumber}
                onChange={handleChange}
                placeholder="(__) ___-____"
                className="mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3F33C0]"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label htmlFor="message" className="font-semibold text-gray-700">
              Message *
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows="5"
              value={newUser.message}
              onChange={handleChange}
              className="mt-1 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#3F33C0]"
              placeholder="Type your message here..."
            />
          </div>

          {/* Terms */}
          <div className="mt-4 flex items-start">
            <input
              required
              type="checkbox"
              name="termsChecked"
              id="terms"
              onChange={handleChange}
              className="mt-1.5 mr-2 accent-[#3F33C0]"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I accept the{" "}
              <a
                href="/Terms-of-service"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline text-[#3F33C0]"
              >
                Terms of service
              </a>
            </label>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-[#3F33C0] text-white font-semibold rounded-md hover:bg-[#2c2594] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact info row (optional) */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            Or drop us an email at{" "}
            <a
              href="mailto:thiago@jobbyo.ai"
              className="font-bold underline text-[#3F33C0]"
            >
              thiago@jobbyo.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
