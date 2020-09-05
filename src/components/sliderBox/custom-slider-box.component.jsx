import React from 'react'
import {SlideRBoxStyles} from '../../assets/styles';

const SlideRBox = SlideRBoxStyles;

const SliderBox = ({linkUrl,imgUrl,tag,name}) => (
    <SlideRBox className='slider-box flex ai-end' data-tag ={tag}>
        <a href={linkUrl} rel="noopener noreferrer" target='_blank'><span className='inner-text'></span></a>
        <div className='image-wrapper'>
            <img src={imgUrl ? imgUrl : 'customIMG'} alt='img'/>
        </div>
        <div className='content'>
            <p className='tag'>{tag}</p>
            <div className='row flex ai-center jc-sb'>
                <p className='name' ><span className='inner-text'>{name}</span></p>
            </div>
        </div>
    </SlideRBox>
)

export default SliderBox;