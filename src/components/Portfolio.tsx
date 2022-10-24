import React from 'react';
import todolist from '../assets/portfolio/todolist.jpg';
import socialNetworking from '../assets/portfolio/socialNetwork.jpg';
import card from '../assets/portfolio/card.jpg';
import pizza from '../assets/portfolio/pizza.png';
import sneaker from '../assets/portfolio/sneaker.jpg';


export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            img: todolist,
            hrefDemo: '',
        },
        {
            id: 2,
            img: socialNetworking,
            hrefDemo: '',
        },
        {
            id: 3,
            img: card,
            hrefDemo: '',
        },
        {
            id: 4,
            img: pizza,
            hrefDemo: 'https://aliakseishu.github.io/cafe/',
        },
        {
            id: 5,
            img: sneaker,
            hrefDemo: '',
        },
    ]

    return (
        <div id="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({id, img, hrefDemo}) => (
                        <div key={id} className="shadow-md shadow-cyan-600 rounded-lg">
                                <img src={img} alt="Todolist" className="rounded-md duration-300 hover:scale-105"/>
                            <div className="flex items-center justify-center">
                                <a href={hrefDemo} target="_blank">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                </a>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

