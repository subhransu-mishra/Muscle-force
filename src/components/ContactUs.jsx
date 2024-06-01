import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-center py-4 text-4xl font-bold text-green-800">
        Contact
      </h1>
      <form
        action="https://getform.io/f/1cd8559d-ab81-4df7-9b52-ca1d8eb2c95f"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm p-1">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="number"
              name="number"
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows="10"
            name="message"
            required
          />
        </div>
        <button className="bg-green-600 font-medium text-white mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
