import React from 'react';
import Service from '../assets/Service.png';
import Button from '../assets/BUTTON.png';
import Button2 from '../assets/BUTTON-2.png';
import Button3 from '../assets/BUTTON-3.png';

const Details = () => {
  return (
    <div className="flex mt-">
      {/* Buttons and Form Container */}
      <div className="w-[472px] h-[457px] gap-[23px] mt-[75px] ml-[120px] p-5">
        {/* Buttons */}
        <div className="flex gap-5 mb-5">
          <div>
            <img src={Button} width={220} height={44} />
          </div>
          <div>
            <img src={Button2} width={220} height={44} />
          </div>
        </div>
        <img src={Button3} height={44} width={472} className="py-4 mb-5" />
        
        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Comment"
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Service Image */}
      <div>
        <img src={Service} height={615} width={608} />
      </div>
    </div>
  );
};

export default Details;
