import { ColorSwatch } from "heroicons-react";
import React from "react";

const Presentation = (props) => {
  return (
    <div
      style={{ marginTop: "-8px" }}
      className="flex flex-col lg:flex-row items-center md:justify-evenly w-full min-h-screen bg-gray-900 mt-5"
    >
      <div className="mt-5 mb-4 lg:mt-1 lg:mb-1 rounded-lg">
        <div className="bg-gray-100 rounded-lg w-96">
          <img
            src="https://unsplash.it/640/425"
            alt=""
            className="w-full h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
          />

          <div className="px-10 py-6 mb-10 text-center">
            <div className="mb-4 text-3xl font-bold text-indigo-700 uppercase">
              Présentation
            </div>
            <span className="text-sm">
              Je m'appelle <b>David De ville</b> et je suis{" "}
              <b>développeur back-end</b>. Actuellement à la recherche d'un
              emploi, je cherche un poste de développeur <b>PHP/Symfony</b>,
              mais je suis également ouvert à d'autres propositions liées au
              développement back-end.
              <br />
              <br />
              Si vous souhaitez consulter mon CV au format PDF, c'est{" "}
              <a
                href="http://google.fr"
                style={{ color: "red", fontWeight: "bold" }}
              >
                ici
              </a>
              .
            </span>
          </div>
          <button className="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-indigo-700 rounded-b-lg hover:bg-indigo-800">
            <span style={{ color: "transparent" }}>VIEW RECIPES</span>
          </button>
        </div>
      </div>
      <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-2xl font-semibold">
            Mes expériences professionnelles
          </h2>
          <p className="mt-5 text-gray-600">
            - Formation développeur web à la <b>Webacadémie by EPITECH</b> (2019-2021)
          </p>
          <p className="mt-5 text-gray-600">
            - Développeur back-end pour la société <b>ELOSI</b> (2020-2021)
          </p>
        </div>
        <div className="flex justify-end mt-4">
        </div>
      </div>
    </div>
  );
};

export default Presentation;
