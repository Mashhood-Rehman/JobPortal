"use client"

import { useState } from 'react';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setShowContact(!showContact);
  };

  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">JOBIFY</h2>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quos iure fuga Lorem
            ipsum dolor sit amet.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <a href="#" className="mr-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="md:w-1/3 md:mx-4 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Job
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Police
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Application
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Candidates
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 md:mx-4 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                All Job
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Job Details
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                How To Apply
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 md:mx-4 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          {showContact ? (
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="tel:+0122346789" className="hover:text-gray-400">
                  +012 234 6789
                </a>
              </li>
              <li className="mb-2">
                <a href="mailto:example@gmail.com" className="hover:text-gray-400">
                  example@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Dhaka Tangail, Bangladesh
                </a>
              </li>
            </ul>
          ) : (
            <button onClick={handleClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;