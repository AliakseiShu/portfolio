import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';

export const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (<>LinkedIn<FaLinkedin size={30}/></>),
            href: 'https://www.linkedin.com/in/react-redux-typescript-javascript-aliaksei-shulha-front-end/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>Github<FaGithub size={30}/></>),
            href: 'https://github.com/AliakseiShu',
        },
        {
            id: 3,
            child: (<>Codewars<SiCodewars size={30}/></>),
            href: 'https://www.codewars.com/users/odin8908',
        },
        {
            id: 4,
            child: (<>Mail<HiOutlineMail size={30}/></>),
            href: 'mailto:aliakseishulha2021@gmail.com',
        },
        {
            id: 5,
            child: (<>Resume<BsFillPersonLinesFill size={30}/></>),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, child, href, download, style}) => (
                    <li key={id}
                        className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                        <a href={href}
                           className="flex justify-between items-center w-full text-white"
                           download={download}
                           target="_blank">
                            {child}
                        </a>
                    </li>))}
            </ul>
        </div>
    );
};

