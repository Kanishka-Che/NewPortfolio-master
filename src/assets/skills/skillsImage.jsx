import html from './html.svg'
import photoshop from './photoshop.svg'
import illustrator from './illustrator.svg'
import docker from './docker.svg'
import afterEffects from './after-effects.svg'
import css from './css.svg'
import javascript from './javascript.svg'
import nextJS from './nextJS.svg'
import nodeJS from './nodeJs.svg'
import react from './react.svg'
import typescript from './typescript.svg'
import mongoDB from './mongoDB.svg'
import mysql from './mysql.svg'
import tailwind from './tailwind.svg'
import vitejs from './vitejs.svg'
import c from './c.svg'
import java from './java.svg'
import php from './php.svg'
import adobeaudition from './adobeaudition.svg'
import aws from './aws.svg'
import firebase from './firebase.svg'
import git from './git.svg'
import lightroom from './lightroom.svg'
import wordpress from './wordpress.svg'
import figma from './figma.svg'
import microsoftoffice from './microsoftoffice.svg'
import picsart from './picsart.svg'
import canva from './canva.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'nextjs':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'php':
            return php;
        case 'ruby':
            return ruby;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'lightroom':
            return lightroom;
        case 'node js':
            return nodeJS;
        case 'opencv':
            return opencv;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'canva':
            return canva;
        default:
            break;
    }
}
