import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javaScript from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

export const Experience = () => {
    return (
        <div className="">
            <div>
                <div>
                    <p>Experience</p>
                    <p>These are technologies I've worked with</p>
                </div>
                <div>
                    <div>
                        <img src={html} alt="Experience"/>
                        <p>HTML</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

