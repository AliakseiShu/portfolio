import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javaScript from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

export const Experience = () => {

const techs = [
    {
        id: 1,
        imgTech: html,
        title: 'HTML',
        style: 'shadow-cyan-500',
    },
    {
        id: 2,
        imgTech: css,
        title: 'CSS',
        style: 'shadow-cyan-500',
    },
    {
        id: 3,
        imgTech: javaScript,
        title: 'JavaScript',
        style: 'shadow-cyan-500',
    },
    {
        id: 4,
        imgTech: react,
        title: 'React',
        style: 'shadow-cyan-500',
    },
    {
        id: 5,
        imgTech: github,
        title: 'Github',
        style: 'shadow-cyan-500',
    },
    {
        id: 6,
        imgTech: tailwind,
        title: 'Tailwind',
        style: 'shadow-cyan-500',
    },
]
    return (
        <div id="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({id, imgTech, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounder-lg ${style}`} >
                            <img src={imgTech} alt="Experience" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

