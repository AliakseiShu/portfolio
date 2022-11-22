import React from 'react';

export const Contacts = () => {
    return (
        <div id="contacts" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/c7c9ee3d-098c-4022-a509-cff34fab3bb5" method="POST"
                          className="flex flex-col w-full md:w-1/2 ">
                        <input type="text"
                               name="name"
                               placeholder="Enter your name"
                               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <input type="text"
                               name="email"
                               placeholder="Enter your email"
                               className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                        <textarea name="message"
                                  placeholder="Enter your massage"
                                  rows={10}
                                  className="p-2 bg-transparent border-2 rounded-md text-while focus:outline-none"></textarea>
                        <button
                            className="text-white bg-gradient-to-r from-cyan-500 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's
                            talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
