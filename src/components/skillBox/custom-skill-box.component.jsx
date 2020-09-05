import React from 'react'
import {SkilLBoxStyles} from '../../assets/styles';

const SkilLBox = SkilLBoxStyles;

const SkillBox = ({children,skillName}) => (
    <SkilLBox className='skill-box flex jc-center ai-center' >
        <div className='wrapper flex ai-center jc-start'>
            <div className='icon-wrapper flex jc-center ai-center'>
                {children}
            </div>
            <div className='skill flex ai-center jc-sb'>
                <p className='name'>{skillName}</p>
            </div>
        </div>
    </SkilLBox>
)

export default SkillBox;