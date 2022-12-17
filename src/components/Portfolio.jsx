import React from "react";
import bicis from "../assets/portfolio/bicis.jpeg";
import piedrapapeltijera from "../assets/portfolio/piedrapapletijera.jpeg";
import contador from "../assets/portfolio/contador.jpg";
import todo from "../assets/portfolio/todo.jpg";
import travel from "../assets/portfolio/travel.jpg";

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      src: travel,
      href: "https://otro-ten.vercel.app/",
      code: "https://github.com/haroldjvilla/travel-website/tree/master",
    },
    {
      id: 2,
      src: todo,
      href: "https://todo-two-liart.vercel.app/",
      code: "https://github.com/haroldjvilla/todo",
    },
    {
      id: 3,
      src: bicis,
      href: "https://haroldjvilla.github.io/curso-frontend-developer-javascript-practico/",
      code: "https://github.com/haroldjvilla/curso-frontend-developer-javascript-practico",
    },
    {
      id: 4,
      src: piedrapapeltijera,
      href: "https://haroldjvilla.github.io/piedraPapelTijera/",
      code: "https://github.com/haroldjvilla/piedraPapelTijera"
    },
    {
      id: 5,
      src: contador,
      href: "https://lucent-begonia-563c96.netlify.app/",
      code: "https://github.com/haroldjvilla/clicksWithReactJs"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex items-center flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, href, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}> Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
