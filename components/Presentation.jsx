import React from "react";

const Presentation = (props) => {
  return (
    <div class="flex flex-col lg:flex-row items-center md:justify-evenly w-full min-h-screen bg-gray-900 mt-5">
      <div class="mt-5 mb-4 lg:mt-1 lg:mb-1 rounded-lg">
        <div class="bg-gray-100 rounded-lg w-96">
          <img
            src="https://unsplash.it/640/425"
            alt=""
            class="w-full h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
          />

          <div class="px-10 py-6 mb-10 text-center">
            <div class="mb-4 text-3xl font-bold text-indigo-700 uppercase">
              title
            </div>
            <span class="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate tempore eligendi magnam distinctio molestias. Incidunt
              at consequuntur consequatur officiis repudiandae! Culpa cum vel
              tenetur itaque eius provident voluptatum similique impedit?
            </span>
          </div>
          <button class="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-indigo-700 rounded-b-lg hover:bg-indigo-800">
            VIEW RECIPES
          </button>
        </div>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
  </div>
</div>
    </div>
  );
};

export default Presentation;
