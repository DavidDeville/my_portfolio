import React from "react";
import Form from "./Form";

const Footer = (props) => {
  return (
    <div id="contact" style={{marginTop: "-50px"}}>
      <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-between">
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Me contacter
            </div>
            <Form />
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Réseaux
            </div>

            <a
              href="https://github.com/DavidDeville"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/david-de-ville/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
          >
            <div className="mt-2">
              © Copyright 2021-year. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
