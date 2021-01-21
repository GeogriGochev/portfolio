import React from 'react'
import { ReactComponent as Li } from '../../assets/images/icons/circle.svg';
import {PersonaLSkillsStyles} from './SectionPersonalSkills.styles';

const PersonaLSkills = PersonaLSkillsStyles;

const SectionPersonalSkills = (props) => {
    const {title,subtitle,softSkill,hardSkill,softSkills,hardSkills} = props;
    const softListing = softSkills.map( singleSkill => (
        <li key={singleSkill.id} className='flex ai-center jc-end' ><span>{singleSkill.skill}</span> <Li/></li>
    ));
    const hardListing =  hardSkills.map( ({id,skill}) => (
        <li key={id} className='flex ai-center jc-start' ><Li/><span>{skill}</span></li>
    ));

    return (
        <PersonaLSkills className='section personal-skills padding'>
            <div className='container flex flex-column jc-center ai-center'>
                <h2 className='title  animated'>{title}</h2>
                <p className='subtitle'>{subtitle}</p>
                <div className='skills-wrapper flex'>
                    <div className='box soft'>
                        <p className='type'>{softSkill}</p>
                        <ul className='skill-tree'>
                            {
                                softListing
                            }
                        </ul>
                    </div>
                    <div className='box hard'>
                        <p className='type'>{hardSkill}</p>
                        <ul className='skill-tree'>
                            {
                                hardListing
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </PersonaLSkills>
    )
}

// class PersonalSkills extends Component {
//     constructor(props) {
//         super(props)

//         this.state= CONTENT_DATA;
//     }

//     render() {
//         const softListing = this.state.about.softSkills.map( ({id,skill}) => (
//             <li key={id} className='flex ai-center jc-end' ><span>{skill}</span> <Li/></li>
//         ));
//         const hardListing =  this.state.about.hardSkills.map( ({id,skill}) => (
//             <li key={id} className='flex ai-center jc-start' ><Li/><span>{skill}</span></li>
//         ));
//         const {title,subtitle,softSkill,hardSkill} = this.state.about;
//         return (
//             <PersonaLSkills className='section personal-skills padding'>
//                 <div className='container flex flex-column jc-center ai-center'>
//                     <h2 className='title  animated'>{title}</h2>
//                     <p className='subtitle'>{subtitle}</p>
//                     <div className='skills-wrapper flex'>
//                         <div className='box soft'>
//                             <p className='type'>{softSkill}</p>
//                             <ul className='skill-tree'>
//                                 {
//                                     softListing
//                                 }
//                             </ul>
//                         </div>
//                         <div className='box hard'>
//                             <p className='type'>{hardSkill}</p>
//                             <ul className='skill-tree'>
//                                 {
//                                     hardListing
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </PersonaLSkills>
//         )
//     }
// }

export default SectionPersonalSkills;
