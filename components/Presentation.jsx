import { ColorSwatch } from "heroicons-react";
import React from "react";

const Presentation = (props) => {
  return (
    <div
      id="presentation"
      style={{ marginTop: "-8px" }}
      className="flex flex-col lg:flex-row items-center md:justify-evenly w-full min-h-screen bg-gray-900 mt-5"
    >
      <div className="mt-5 mb-4 lg:mt-1 lg:mb-1 rounded-lg">
        <div className="bg-gray-100 rounded-lg w-96">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHlt3TFF3OhHw/profile-displayphoto-shrink_800_800/0/1517478491918?e=1637193600&v=beta&t=nAjaTHMTSOyLA3UZBXIG5RuGE-EDnyt0_VhlSDAQyrY"
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
                href="https://bdpdkdd.cluster029.hosting.ovh.net/CV_deville_david.pdf"
                download="CV_deville_david"
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
    </div>
  );
};

export default Presentation;
