import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full lg:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I define myself as a person who likes to keep learning and keep
          updated with what is new in the market, currently a development and
          programming student through a company called prospercity from
          colombia. I have 7 months of experience building and desgining
          software. Currently,
        </p>

        <br />

        <p className="text-xl ">
          My short-term goals is to find a company that allows me to apply all
          the knowledge acquired in my learning process at Prospercity, and to
          have the opportunity to continue learning both from my own experience
          and that of my colleagues.
        </p>
      </div>
    </div>
  );
}

export default About;
