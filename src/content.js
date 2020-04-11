import React from 'react';
import { ReactComponent as Html } from './assets/images/icons/css.svg';
import { ReactComponent as Wordpress } from './assets/images/icons/wordpress.svg';
import { ReactComponent as Woo } from './assets/images/icons/woo.svg';
import { ReactComponent as Sass } from './assets/images/icons/sass.svg';
import { ReactComponent as Javascript } from './assets/images/icons/javascript.svg';
import { ReactComponent as Jss } from './assets/images/icons/jss.svg';
import { ReactComponent as ReactB } from './assets/images/icons/react.svg';
import { ReactComponent as Webpack } from './assets/images/icons/webpack.svg';
import { ReactComponent as Git } from './assets/images/icons/git.svg';
import { ReactComponent as Photoshop } from './assets/images/icons/photoshop.svg';
import { ReactComponent as Xd } from './assets/images/icons/xd.svg';
import { ReactComponent as Figma } from './assets/images/icons/figma.svg';
import { ReactComponent as Exp } from './assets/images/icons/movie-exp.svg';

const CONTENT_DATA = {
    offerSection: {
        subtitle: 'Any offers ?',
        title: "Don't hesitate to contact me"
    },
    homePage: {
        hero: {
            name: 'Georgi Gochev',
            position: 'A Front-end Developer',
            imageUrl: require('./assets/images/hero1.jpg')
        },
        about: {
            title: 'About me',
            imgUrl: require('./assets/images/skill.png'),
            exp: <Exp className='svg animated'/>,
            text: 'Motivated individual, that is passionate about the things he is doing and never gives up. A person determined and ready to give all, to achieve his goals. I enjoy being a front-end developer, because it is helping me to develop my creativity. There is nothing better, than seeing the result of you hard work and the joy of the clients...',
            skills: {
                title: 'Skills',
                subtitle: 'Skills rest in your mind, not in the props you make use of.'
            }
        },
        projects: {
            title: 'Recent projects',
            subtitle: 'Some of the accomplishments so far...'
        }
    },
    projects: {
        title: 'Projects Listing',
        listing: [
            {
                id: '1',
                name: 'Incanto',
                year: '2019',
                tag: 'woocommerce',
                imgUrl: 'https://grind.studio/wp-content/uploads/2020/02/01-Head-1.jpg',
                linkUrl: 'https://incanto.bg/',
                soon: '',
                size:''
            },
            {
                id: '2',
                name: 'Payhawk',
                year: '2020',
                tag: 'wordpress',
                imgUrl: 'https://grind.studio/wp-content/uploads/2019/01/01-PhCover.png',
                linkUrl: 'https://payhawk.com/',
                soon: '',
                size:'down'
            },
            {
                id: '3',
                name: 'Tochici',
                year: '2019',
                tag: 'woocommerce',
                imgUrl: 'https://grind.studio/wp-content/uploads/2020/02/1-Head.jpg',
                linkUrl: 'https://tochici.bg/',
                soon: '',
                size:''
            },               
            {
                id: '5',
                name: 'Nik',
                year: '2019',
                tag: 'wordpress',
                imgUrl: 'https://nik.bg/wp-content/themes/sage/dist/images/video/new-nik-video.jpg',
                linkUrl: 'https://nik.bg/',
                soon: '',
                size:''
            },
            {
                id: '4',
                name: 'Telelink',
                year: '2020',
                tag: 'wordpress',
                imgUrl: 'https://grind.studio/wp-content/uploads/2020/03/hero-img.jpg',
                linkUrl: 'https://tbs.tech/',
                soon: '',
                size: 'down'
            },
            {
                id: '6',
                name: 'SilverBack',
                year: '2019',
                tag: 'wordpress',
                imgUrl: 'https://silverbackgaming.com/wp-content/themes/lifeinteractive/dist//images/silver/silver-back-logo.svg',
                linkUrl: 'https://silverbackgaming.com/',
                soon: '',
                size: 'svg',
    
            },
            {
                id: '7',
                name: 'Vti-capital',
                year: '2019',
                tag: 'wordpress',
                imgUrl: 'https://vticapital.com/wp-content/uploads/2018/11/header-new-1.jpg',
                linkUrl: 'https://vticapital.com/',
                soon: '',
                size: ''
            },
            {
                id: '8',
                name: 'React Colors Project',
                year: '2020',
                tag: 'personal',
                imgUrl: '',
                linkUrl: '',
                soon: 'comming soon',
                size: 'down'
            },
            {
                id: '9',
                name: 'Weekly Budget App',
                year: '2020',
                tag: 'personal',
                imgUrl: '',
                linkUrl: '',
                soon: 'comming soon',
                size: ''
            },
        ]
    },
    about: {
        title: 'Skills',
        subtitle: 'What I have gained from all my previous experience so far...',
        softSkill:'SOFT SKILLS',
        hardSkill:'HARD SKILLS',
        programSkillTitle: 'Skills rest in your mind, not in the props you make use of.',
        softSkills: [
            {
                id: 'skill-1',
                skill: 'Motivated'
            },
            {
                id: 'skill-2',
                skill: 'Positive'
            },
            {
                id: 'skill-3',
                skill: 'Anxious to learn'
            },
            {
                id: 'skill-4',
                skill: 'Team player'
            },
            {
                id: 'skill-5',
                skill: 'Determined'
            },
            {
                id: 'skill-6',
                skill: 'Accountable'
            },
        ],
        hardSkills: [
            {
                id: 'skill-7',
                skill: 'Good listener'
            },
            {
                id: 'skill-8',
                skill: 'Adaptive'
            },
            {
                id: 'skill-9',
                skill: 'Attention to detail'
            },
            {
                id: 'skill-10',
                skill: 'Working under pressure'
            },
            {
                id: 'skill-11',
                skill: 'Decisive'
            },
            {
                id: 'skill-12',
                skill: 'Organised'
            },
            {
                id: 'skill-13',
                skill: 'Flexible'
            },
            {
                id: 'skill-14',
                skill: 'Time managment'
            }
        ],
        programingSkills: [
            {
                id: 'pSkill-1',
                name: 'Wordpress',
                icon: <Wordpress/>
            },
            {
                id: 'pSkill-2',
                name: 'Woocommerce',
                icon: <Woo/>
            },   
            {
                id: 'pSkill-3',
                name: 'HTML',
                icon: <Html/>
            },   
            {
                id: 'pSkill-4',
                name: 'Sass',
                icon: <Sass/>
            },   
            {
                id: 'pSkill-5',
                name: 'Javascript',
                icon: <Javascript/>
            },
            {
                id: 'pSkill-a',
                name: 'JSS',
                icon: <Jss/>
            },
            {
                id: 'pSkill-6',
                name: 'React-basics',
                icon: <ReactB/>
            },     
            {
                id: 'pSkill-8',
                name: 'Webpack',
                icon: <Webpack/>
            },   
            {
                id: 'pSkill-9',
                name: 'GIT',
                icon: <Git/>
            },
            {
                id: 'pSkill-10',
                name: 'Photoshop',
                icon: <Photoshop/>
            },   
            {
                id: 'pSkill-11',
                name: 'XD',
                icon: <Xd/>
            },   
            {
                id: 'pSkill-12',
                name: 'Figma',
                icon: <Figma/>
            },   
        ]
    }
}

export default CONTENT_DATA;