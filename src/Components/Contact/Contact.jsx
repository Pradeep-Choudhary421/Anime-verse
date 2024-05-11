import React from "react";
import emailjs from "emailjs-com";
import Navbar from "../Navbar/Navbar";
import gif from "../../Images/No Sleep.gif";
import './contact.css'

const About = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_voefz4j",
        "template_550l6hk",
        e.target,
        "vLlfgxeGkggIyLtOi"
      )
      .then(
        (res) => {
          window.location.reload();
        }
        // (error) => {
        //   console.log(error.text);
        // }
      );
  }

  return (
    <>
      <Navbar />
      <div className="main my-32 ">
        <div className="gift inline-block">
          <img src={gif} />
        </div>

        <form
          className="contact-form w-96 h-92 space-y-8 "
          onSubmit={sendEmail}
        >
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-black-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center border-2 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
      <footer class="p-4 bg-white dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" class="hover:underline">Anime Verse™</a>. All Rights Reserved.</span>
  </div>
</footer>
    </>
  );
}
export default About;