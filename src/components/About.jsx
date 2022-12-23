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
          I am a person who loves to keep learning and stay on top of the latest
          trends in the software development industry. I'm studying and refining
          my programming skills through a company called Prosperity where we
          learn through real-life agile environments just as the industry works.
          I have seven months of experience building and designing software.
        </p>

        <br />

        <p className="text-xl ">
          I'm looking for a company to apply all the knowledge acquired in my
          learning process at Prospercity, and to have the opportunity to
          continue learning from my own and my colleagues experience.
        </p>
      </div>
    </div>
  );
}

export default About;
