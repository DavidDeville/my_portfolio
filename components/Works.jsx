import React from "react";

const Works = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:justify-evenly w-full min-h-screen bg-gray-900 mt-5">
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl text-white">
            {" "}
            MES PROJETS
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base text-white">
            Voici certains projets que j'ai pu faire lors de ma formation à la
            Webacadémie ou en autodidacte.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white">
              <div>
                <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                  <div>
                    <img className="w-full" src="https://i.imgur.com/lmYYa2s.png" />
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-gray-700 font-bold">
                        Previously On
                      </h1>
                      <div className="flex space-x-2 mt-2">
                        <h3 className="text-lg text-gray-600 font-semibold mb-2">
                          Le Netflix-like
                        </h3>
                      </div>
                      <p className="text-sm tracking-normal">
                        Previously On est un projet qui avait pour but de créer
                        un clône (ou similaire) de Netflix.
                      </p>
                      <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                        Lien vers le projet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white">
              <div>
                <div className="shadow-lg">
                  <div>
                    <img className="w-full" src="https://i.imgur.com/lmYYa2s.png" />
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-gray-700 font-bold">MVC Blog</h1>
                      <div className="flex space-x-2 mt-2">
                        <h3 className="text-lg text-gray-600 font-semibold mb-2">
                          Le blog minimaliste
                        </h3>
                      </div>
                      <p className="text-sm tracking-normal">
                        Un blog très simple réalisé avec Laravel (framework
                        PHP).
                      </p>
                      <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                        <a href="https://github.com/DavidDeville/Project-MVC-Blog">
                          Lien vers le projet
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white">
              <div>
                <div className="shadow-lg">
                  <div>
                    <img className="w-full" src="https://i.imgur.com/lmYYa2s.png" />
                    <div className="px-4 py-2">
                      <h1 className="text-xl font-gray-700 font-bold">
                        Tweet Académie
                      </h1>
                      <div className="flex space-x-2 mt-2">
                        <h3 className="text-lg text-gray-600 font-semibold mb-2">
                          Un clone de Twitter
                        </h3>
                      </div>
                      <p className="text-sm tracking-normal">
                        Tweet Acédemie est un projet qui visait à reproduire un
                        site similaire à Twitter.
                      </p>
                      <button className="mt-12 w-full text-center bg-yellow-400 py-2 rounded-lg">
                        <a href="https://github.com/DavidDeville/Tweet_Academie">
                          Lien vers le projet
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
