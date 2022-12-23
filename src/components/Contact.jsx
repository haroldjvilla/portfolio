import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0 || email.length == 0 || message.length == 0) {
      setError(true);
    }
    console.log(name, email, message);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action=" https://getform.io/f/f0556a4d-3f94-4b8b-bf01-d791774c4235 "
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {error && name.length <= 0 ? (
              <label htmlFor="">Your name can't be Empty</label>
            ) : (
              ""
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            {error && email.length <= 0 ? (
              <label htmlFor="">Your Email can't be Empty</label>
            ) : (
              ""
            )}

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            {error && message.length <= 0 ? (
              <label htmlFor="">Your Message can't be Empty</label>
            ) : (
              ""
            )}

            <button type="sumbit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
