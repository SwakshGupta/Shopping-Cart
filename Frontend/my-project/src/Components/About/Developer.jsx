import React from "react";

function Developer() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="flex justify-end items-center p-4 md:p-6">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19c-4.95 1.5-4.95-2.5-7-3l1.5-5.5L0 9l7.5-1L9 2l1.5 6 7.5 1-3.5 3.5 1 5.5c-2.18.65-4.24 1.55-6 2.5"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 10v4M14 7v7M10 14H7a2 2 0 01-2-2V9a2 2 0 012-2h3m7 0a2 2 0 00-2-2h-1a2 2 0 00-2 2v8a2 2 0 002 2h1a2 2 0 002-2v-4"
              />
            </svg>
          </a>
        </div>
        <p className="text-s font-thin italic m-4 mt-0 text-white md:m-6 md:mt-0">
          &lt;html&gt;
        </p>
        <p className="text-s font-thin italic m-4 text-white md:m-6">
          &lt;body&gt;
        </p>

        <div className="bg-gray-900 min-h-screen text-white flex items-center justify-start px-8">
          <div>
            <p className="text-s font-thin italic m-6">&lt;h1&gt;</p>
            <p className="text-7xl font-extrabold mb-4">Hi</p>
            <p className="text-7xl font-extrabold mb-4">
              I'M <span className="text-green-500">S</span>waksh
            </p>
            <p className="text-7xl font-extrabold">Full stack developer</p>
            <p className="text-s font-thin italic m-6">&lt;/h1&gt;</p>
            <button className="bg-gray-900 text-green-500 border border-green-500 px-6 py-2 rounded-lg mt-4 ml-2">
              Contact Me
            </button>
          </div>
        </div>

        <p className="text-s font-thin italic m-4 text-white md:m-6">
          &lt;/body&gt;
        </p>

        <p className="text-s font-thin italic m-4 text-white mb-0 md:m-6">
          &lt;/html&gt;
        </p>
      </div>
    </>
  );
}

export default Developer;
