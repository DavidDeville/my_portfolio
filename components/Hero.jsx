import React from 'react';

const Hero = (props) => {
    return ( 
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
        
              <div>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
                        </a>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      <a href="#presentation" className="font-medium text-gray-500 hover:text-gray-900">Présentation</a>
                      
                      <a href="#parcours" className="font-medium text-gray-500 hover:text-gray-900">Parcours</a>
                      
                      <a href="#projets" className="font-medium text-gray-500 hover:text-gray-900">Projets</a>
        
                      <a href="#contact" className="font-medium text-gray-500 hover:text-gray-900">Contact</a>
    
                    </div>
                  </nav>
                </div>
              </div>
        
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Développeur</span>
                    <span className="block text-indigo-600 xl:inline">back-end</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Salut ! Bienvenue sur mon portfolio, je suis David. 
                    Je m'intéresse au développement web et plus particulièrement le back-end depuis 2019.
                  </p>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://outsourcify.net/wp-content/uploads/2018/04/PHP-code-58d2d5803df78c51623a6ce2.jpg" alt=""/>
          </div>
        </div>);
}
 
export default Hero;