import React, { useState } from "react";
import emailjs from "emailjs-com";
import apiKeys from "../keys";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    let form = {
      name,
      email,
      message
    }

    const data = {
      service_id: apiKeys.service_id,
      template_id: apiKeys.template_id,
      user_id: apiKeys.user_id,
      template_params: form
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      (result) => {
        console.log(result.statusText);
        console.log("email sent");
        setSent("Votre email a bien été envoyé !");
      },
      (error) => {
        console.log(error.statusText);
      }
    );

    //e.target.reset();
  };

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Prénom
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="nick"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-white hover:bg-teal-400 focus:shadow-outline focus:outline-none text-dark font-bold py-2 px-4 rounded"
            type="button"
            onClick={(e) => sendEmail(e)}
          >
            Envoyer
          </button>
        </div>
      </div>
        <div className="md:w-3/3 mt-3">
          <p style={{color:"white"}}>{sent !== "" ? sent : <></>}</p>
        </div>
    </form>
  );
};

export default Form;
