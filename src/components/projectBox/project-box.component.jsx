import React from 'react';
import {ProjecTBoxStyles} from '../../assets/styles';

const ProjecTBox = ProjecTBoxStyles;

const ProjectBox = ({linkUrl,imgUrl,tag,name,soon,size}) => (
    <ProjecTBox className={`project-box box flex ai-center ${size} ${soon && 'soon-tag'}`}>
        <div className='content-wrapper flex ai-end'>
            <a href={linkUrl} rel="noopener noreferrer" target='_blank'><span className='inner-text'></span></a>
            <span className='soon'>Comming soon</span>
            <div className='image-wrapper'>
                {
                    imgUrl ? 
                        <img src={imgUrl} alt='img'/> 
                    : 
                    <div className="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
            </div>
            <div className='content'>
                <p className='tag'>{tag}</p>
                <div className='row flex ai-center jc-sb'>
                    <p className='name'><span className='inner-text'>{name}</span></p>
                </div>
            </div>
        </div>
    </ProjecTBox>
)

export default ProjectBox;