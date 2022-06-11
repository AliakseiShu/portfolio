import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage  from '../assets/image/Todolist.jpg';
import social  from '../assets/image/SocialNetwork.jpg';
export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${social})`
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <Title firstName={'What I '} secondName={'Do'} descriptionTitle={'work i have done'}/>
                <div className={style.projects}>
                    <Project style={socialNetwork} buttonName={"READ MORE"}
                             title={"Social Network"}
                             description={"Project description"}/>
                    <Project style={todolist} buttonName={"READ MORE"}
                             title={"Todo list"}
                             description={"Project description"}/>
                </div>
            </div>
        </div>
    );
}

