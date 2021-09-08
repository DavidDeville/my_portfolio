import React from "react";

const Footer = (props) => {
  return (
    <div>
      <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Getting Started
            </div>

            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Installation
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Release Notes
            </a>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Core Concepts
            </div>

            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Utility-First
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Responsive Design
            </a>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Customization
            </div>

            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Configuration
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Theme Configuration
            </a>
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
              <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%230077b7' d='M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z'%3E%3C/path%3E%3C/svg%3E" alt="Linkedin" />
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

            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-twitter-alt"></i>
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-youtube"></i>
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-linkedin"></i>
              </a>
              <a href="#" className="w-6 mx-1">
                <i className="uil uil-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
