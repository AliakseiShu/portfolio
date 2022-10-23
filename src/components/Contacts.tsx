import React from 'react';

export const Contacts = () => {
    return (
        <div>
            <div>
                <div>
                    <p>Contact</p>
                    <p>Submit the form below to get in touch with me</p>
                </div>
                <div>
                    <form action="" className="">
                        <input type="text"
                               name="name"
                               placeholder="Enter your name"
                               className="p-2 bg-transparent border-2 text-white focus:outline-none"/>
                        <input type="text"
                               name="email"
                               placeholder="Enter your email"
                               className="p-2 bg-transparent border-2 text-white focus:outline-none"/>
                        <textarea name="message" rows={10}
                                  className="p-2 bg-transparent border-2 rounded-md text-while focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-r from-cyan-500 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

