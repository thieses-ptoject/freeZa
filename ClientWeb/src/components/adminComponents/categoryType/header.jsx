import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listening, setListening] = useState(false);
  let recognition;

  const handleVoiceChatToggle = () => {
    if (!listening) {
      startVoiceRecognition();
    } else {
      stopVoiceRecognition();
    }
  };

  const startVoiceRecognition = () => {
    recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      console.log("Voice recognition started");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      stopVoiceRecognition();
    };

    recognition.onend = () => {
      console.log("Voice recognition ended");
      setListening(false);
    };

    recognition.start();
    setListening(true);
  };

  const stopVoiceRecognition = () => {
    recognition.stop();
    setListening(false);
  };

  return (
    <div className="w-[100%]  float-right shadow-red-50 shadow-lg">
      <form className="flex items-center pb-2 ml-5  gap-2 mt-1 ">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-[60%]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
              />
            </svg>
          </div>

          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search For Anything Mr Admin"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
            onClick={handleVoiceChatToggle}
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
              />
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-red-100 rounded-lg border 0 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>

        <div>
          <p className=" border-b-2 border-white">khalil hamzaoui</p>
        </div>
        <div className="">
          <img
            className="rounded-[900px] h-11 w-11"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="">
          <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent text-[14px] rounded-full">
            Log out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
