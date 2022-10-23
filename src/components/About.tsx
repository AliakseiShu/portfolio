import React from 'react';

export const About = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
            <p className="text-xl mt-20">
                I am currently improving my skills in this
                direction and expanding them with new
                technologies. Usually
                I prefer to spend my leisure
                time on improving my
                English. Available for relocation.
            </p>
            <br/>
            <p className="text-xl mt-20">
                Open for your suggestions.
            </p>
            </div>
        </div>
    );
};

