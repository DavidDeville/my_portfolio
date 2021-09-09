import React from "react";

const Professional = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:justify-evenly w-full min-h-screen bg-white mt-5">
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
            {" "}
            MON PARCOURS
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Le développement web, c'est un apprentissage continu.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w2/4 md:w-1/2 p-4">
            <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  src="https://www.virginiebaro.com/wp-content/uploads/2018/01/work-on-laptop-icon-10.jpg"
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">
                  Mes expériences professionnelles
                </h2>
                <p className="mt-5 text-gray-600">
                  - Développeur back-end pour la société <b>ELOSI</b>{" "}
                  (2020-2021)
                </p>
                <p className="mt-5 text-gray-600">
                  - Formation développeur web à la <b>Webacadémie by EPITECH</b>{" "}
                  (2019-2021)
                </p>
                <p className="mt-5 text-gray-600">
                  - Traducteur bénévole (français &#x2190;&#x2192; japonais) pour la société <b>YS NET</b>{" "}
                  (2015-2021)
                </p>
              </div>
              <div className="flex justify-end mt-4"></div>
            </div>
          </div>

          <div className="xl:w-2/4 md:w-1/2 p-4">
            <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  src="data:image/png;base64,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"
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">
                  Ma formation
                </h2>
                <p className="mt-5 text-gray-600">
                  - Titre professionnel de niveau III (équivalent BAC +2){" "}
                  <b>(2019-2021)</b>
                </p>
                <p className="mt-5 text-gray-600">
                  - L1 Licence de Japonais / Université De Lille III{" "}
                  <b>(2012-2013)</b>
                </p>
                <p className="mt-5 text-gray-600">
                  - DAEU A (Diplôme d'Accès aux Etudes Universitaires - Littéraire){" "}
                  <b>(2011-2012)</b>
                </p>
              </div>
              <div className="flex justify-end mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
