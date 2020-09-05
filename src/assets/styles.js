import styled from 'styled-components';

export const SlideRBoxStyles = styled.div`
position: relative;
border-radius: 10px;
overflow: hidden;
margin: 0 10px;
height: 380px;

a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.image-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 0;

    img {
        transform: scale(2);
    }
}

.content {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: 15px 20px;
    transform: translateY(100%);
    opacity: 0;
    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

    .tag {
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: 15px;
    }

    .name {
        .inner-text {
            color: #000;
            font-size: 1.25rem;
            position: relative;
            &:after {
                content:'';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0px;
                left: 0;
                background-color: #000;
                transform: scaleX(0);
                transform-origin: bottom right;
                transition: transform 0.3s;
                transition-delay: 0.30s;
            }
        }
        
        &:hover {
            .inner-text {
                &:after {
                    transform-origin: bottom left;
                    transform: scaleX(1);
                }
            }
        }
    }
}

    &:hover {
        .content {
            transform: translateY(0);
            opacity: 1;

            .name {
                .inner-text {
                    &:after {
                        transform-origin: bottom left;
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
    @media( max-width: 1025px ) {
        .content {
            transform: translateY(0);
            opacity: 1;

            .name {
                .inner-text {
                    &:after {
                        transform-origin: bottom left;
                        transform: scaleX(1);
                    }
                }
            }
        }
        .image-wrapper  {
            img {
                transform: scale(2.3);
            }
        }
    }

    @media( max-width: 767px ) {
        margin: 0 5px;
        .image-wrapper  {
            img {
                transform: scale(2.5);
            }
        }
    }

    @media( max-width: 321px ) {
        .image-wrapper  {
            img {
                transform: scale(2.8);
            }
        }
    }
}
`;

export const SkilLBoxStyles = styled.div`
flex: 0 1 32%;
max-width: 32%;
margin: 0 2.4px 30px;
width: 100%;

.wrapper {
    width: 100%;
    max-width: 96%;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 1);
    border-radius: 5px;
    padding: 20px;
    position: relative;
    background-color: transparent;
    transition: 0.35s ease-in-out;
    cursor: pointer;

    .icon-wrapper {
        width: 87px;
        height: 87px;
        border-radius: 50%;
        overflow: hidden;
        background: #000;

        svg {
            max-width: 36px;
            width:36px;

            path {
                fill: #fff;
                transition: 0.35s ease-in-out;
            }

            .st0 {
                fill:none;
                stroke:#fff;
                stroke-width:8;
                transition: 0.35s ease-in-out;
            }
        }
    }

    .skill {
        margin-left: 23px;
    }

    .name {
        font-size: 1.5625rem;
        line-height: 2.1875rem;
        color: #fff;
    }

    &:hover {
        background-color: #FF4900;

        .icon-wrapper {
            svg {
                path {
                    fill: #FF4900;
                }
                
                .st0{
                    stroke:#FF4900;
                }
            }
        }
    }
}
@media( max-width: 1025px ) {
    flex: 0 1 33%;
    max-width: 33%;
    margin: 0 0 30px;

    .wrapper {
        padding: 10px 20px;

        .icon-wrapper {
            transform: scale(0.8);
        }

        .skill {
            margin-left: 13px;
            .name {
                font-size: 1.3125rem;
                line-height: 2.1875rem;
            }
        }
    }
}

@media( max-width: 768px ) { 
    flex: 0 1 50%;
    max-width: 50%;
}

@media( max-width: 767px ) { 
    flex: 0 1 100%;
    max-width: 100%;

    .wrapper {
        padding: 10px 5px;
        .skill {
            .name {
                font-size: 1rem;
            }
        }
    }
}
`;

export const SectioNHeadingStyles = styled.div`
position: relative;
padding-top: 115px;
text-align: center;
max-width: 1080px;
margin: 0 auto 75px;
position: relative;

svg {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.title {
    font-weight: 500;
    color: #fff;
    font-size: 2.5rem;
    line-height: 3.125rem;
    margin-bottom: 20px;
    width: 100%;
}

.subtitle {
    color: #fff;
    font-size: 1.125rem;
    line-height: 2.1875rem;
    font-weight: 300;
    text-align: center;
}

@media( max-width: 767px ) {
    margin: 0 auto 40px;

    .title {
        font-size: 1.875rem;
    }
}
`;

export const ProjecTBoxStyles = styled.div`
&.box {
    flex: 0 1 33%;
    max-width: 33%;

    .content-wrapper {
        margin: 0 15px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 380px;
        border-radius: 10px;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 1);

        a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }
    }

    .image-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        z-index: 0;

        img {
            transform: scale(2);
        }
    }

    .loading {
        text-align: center;

        span {
            display: inline-block;
            vertical-align: middle;
            width: 10px;
            height: 10px;
            margin: 50px auto;
            background: #551800;
            border-radius: 50px;
            animation: loader 0.9s infinite alternate;

            &:nth-of-type(2) {
                animation-delay: 0.3s;
                background: #FF4900;
                margin: 0 4px;
            }

            &:nth-of-type(3) {
                animation-delay: 0.6s;
                background: #ff7944;
            }

            @keyframes loader {
                0% {
                    width: 10px;
                    height: 10px;
                    opacity: 0.9;
                    transform: translateY(0);
                }

                100% {
                    width: 24px;
                    height: 24px;
                    opacity: 0.1;
                    transform: translateY(-21px);
                }
            }
        }
    }

    .soon {
        display: none;
        position: absolute;
        top: 33px;
        justify-content: center;
        align-items: center;
        right: -53px;
        background: #FF4900;
        color: #fff;
        z-index: 1;
        padding: 10px;
        font-size: 14px;
        transform: rotate(45deg);
        width: 200px;
    }

    .content {
        width: 100%;
        background-color: #fff;
        padding: 15px 20px;
        transform: translateY(100%);
        opacity: 0;
        transition: 0.35s ease-in-out;

        .tag {
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 15px;
        }

        .name {
            .inner-text {
                color: #000;
                font-size: 1.25rem;
                position: relative;
                &:after {
                    content:'';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0px;
                    left: 0;
                    background-color: #000;
                    transform: scaleX(0);
                    transform-origin: bottom right;
                    transition: transform 0.3s;
                    transition-delay: 0.30s;
                }
            }
            
            &:hover {
                .inner-text {
                    &:after {
                        transform-origin: bottom left;
                        transform: scaleX(1);
                    }
                }
            }
        }
    }

    &:hover {
        .content {
            transform: translateY(0);
            opacity: 1;

            .name {
                .inner-text {
                    &:after {
                        transform-origin: bottom left;
                        transform: scaleX(1);
                    }
                }
            }
        }
    }

    &.svg {
        .image-wrapper {
            text-align: center;

            img {
                transform: scale(1);
            }
        }
    }

    &.soon-tag {
        .soon {
            display: flex;
    }
    }

    &.down {
        margin-bottom: 40px;

        .content-wrapper {
            height: 480px;

            .image-wrapper {
                img {
                    transform: scale(2.3);
                }
            }
        }
    }

    @media( max-width: 1440px ) {
        .image-wrapper {
            img {
                transform: scale(2.5);
            }
        }
    }

    @media( max-width: 1024px ) {
        .content-wrapper {
            height: 328px;
        }
        .content {
            transform: translateY(0);
            opacity: 1;
        }
        &.down {
            .content-wrapper {
                height: 405px;
                .image-wrapper {
                    img {
                        transform: scale(3);
                    }
                }
            }                
        } 
        &.svg {
            .image-wrapper {
                top: 40%;
            }
        }           
    }

    @media( max-width: 768px ) {
        flex: 0 1 50%;
        max-width: 50%;
        margin-bottom: 30px;
        &.down {
            margin-bottom: 30px;
            .content-wrapper {
                height: 328px;
            }
        }
    }

    @media( max-width: 767px ) {
        flex: 0 1 100%;
        max-width: 100%;
        .content-wrapper {
            margin: 0;
        }
    }
}
`;

export const InputBoxStyles = styled.div`
&   {
    flex: 0 1 31%;
    max-width: 31%;
    background-color: #111;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.22), 0 10px 12px rgba(0, 0, 0, 0.22);
    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

    &:focus,
    &:hover {
        transform: scale(0.98);
        box-shadow: 0 10px 38px rgba(0, 0, 0, 0.42), 0 10px 12px rgba(0, 0, 0, 0.32);
    }

    input {
        border: none;
        color: #fff;
        background-color: transparent;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;

        &::placeholder {
            color: #fff;
        }
    }

    @media( max-width: 1025px ) {
        flex: 0 1 60%;
        max-width: 60%;
        & + .input-box {
            margin-top: 20px;
        }
    }

    @media( max-width: 768px ) {
        flex: 0 1 80%;
        max-width: 80%;
        input {
            width: 100%;
        }
    }

    @media( max-width: 767px ) {
        flex: 0 1 100%;
        max-width: 100%;
        padding: 15px;
    }
}
`;

export const MobilENavStyles = styled.div`
& {
    display:none;
    .button-nav {
        position: relative;
        width: 30px;
        height: 20px;
        cursor: pointer;

        span {
            position: absolute;
            height: 2px;
            width: 50%;
            background: #fff;
            opacity: 1;
            transition: 0.35s ease-in-out;

            &:nth-child(1),
            &:nth-child(2) {
                top: 0;
            }

            &:nth-child(3),
            &:nth-child(4) {
                top: 10px;
            }

            &:nth-child(5),
            &:nth-child(6) {
                top: 20px;
            }

            &:nth-child(even) {
                left: 50%;
            }
        }

        &.active {
            span {
                background: #FF4900;
                &:nth-child(1) {
                    transform: translateX(5px) translateY(7px) rotate(45deg);
                }
                &:nth-child(2) {
                    transform: translateX(-5px) translateY(7px) rotate(-45deg);
                }
                &:nth-child(3) {
                    transform: translateX(-100%);
                    opacity: 0;
                }
                &:nth-child(4) {
                    transform: translateX(100%);
                    opacity: 0;
                }
                &:nth-child(5) {
                    transform: translateX(5px) translateY(-8px) rotate(-45deg);
                }
                &:nth-child(6) {
                    transform: translateX(-5px) translateY(-8px) rotate(45deg);
                }
            }
        }
    }

    .logo {
        .svg {
            max-width: 100px;
        }
    }


    .toggle-nav {
        background: #FF4900;
        position: fixed;
        top: 88px;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 100;
        padding: 30px 15px;
        opacity: 0;
        transform: translateX(-100%);
        transition: 0.55s cubic-bezier(0.07, 0.08, 0.16, 0.99);

        .mobile-back {
            position: absolute;
            top: -88px;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0;
            transition: 0.35s ease-in-out;
            transition-delay: 0.55s;
        }

        .nav {
            position: relative;
            li {
                background: #000;
                box-shadow: 0 10px 38px rgba(0, 0, 0, 0.22), 0 10px 12px rgba(0, 0, 0, 0.22);
                padding: 10px 30px;
                border-radius: 4px;
                opacity: 0;
                transform: translateX(50px);
                transition: 0.55s cubic-bezier(0.07, 0.08, 0.16, 0.99);
                & + li {
                    margin-top: 25px;
                  }
                a {
                    color: #fff;
                    font-size: 1.125rem;
                    line-height: 1.6875rem;
                }
                
                &:last-child {
                    button {
                        padding: 0;
                        color: #FF4900;
                        font-size: 1.125rem;
                    }
                }

                &:nth-child(1) {
                    transition-delay: 1.1s;
                }

                &:nth-child(2) {
                    transition-delay:  1.3s;
                }

                &:nth-child(3) {
                    transition-delay:  1.5s;
                }

                &:nth-child(4) {
                    transition-delay:  1.7s;
                }
            }
        }

        &.active {
            opacity: 1;
            transform: translateX(0);
            .mobile-back {
                opacity: 1;
            }
            .nav {
                li {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }
    }


    @media( max-width: 767px ) {
        display:block;
    }
}
`;

export const THeaderStyles = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 10;
overflow: hidden;
background-color: #111;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

.rest {
  .nav {
    margin-right: 12px;
    li {
      position: relative;
      padding: 65px 27px 30px;
      transition: 0.35s ease-in-out;
      a {
        display: inline-block;
        color: #fff;
        font-size: 1.125rem;
        line-height: 1.6875rem;
        &::before {
          opacity: 0;
          transform: translateY(40%);
          background-color:#FF4900;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          z-index: -1;
          transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
        }
        &.active {
          &::before {
            transform: translateY(0);
            opacity: 1;
          }
        }

        &:hover {
          .inner-text {
            &:after {
              transform-origin: bottom left;
              transform: scaleX(1);
            }
          }
        }

        .inner-text {
          position: relative;
          &:after {
            content:'';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #fff;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s;
          }
        }
      }
    }
  }
  button {
    margin-bottom: 10px;
    transition: 0.35s ease-in-out;
  }
}

&.scroll {
  .rest {
    .nav {
      li {
        padding: 32px 27px 30px;
      }
    }
    .btn {
      margin-bottom: 12px;
    }
  }
}
@media( max-width: 1025px ) {
  .rest {
    button {
      margin-bottom: 16px;
    }
  }
}

@media( max-width: 767px ) {
  .desk-nav {
    display: none;
  }
}
`;

export const ContacTFormStyles = styled.div`
&   {
    @media( max-width: 1025px ) {
        form > .flex {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
}
`;

export const BFooterStyles =  styled.div`
.scrollTop {
    position: fixed;
    top: 100px;
    left: auto;
    right: 5%;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto;
    background-color: #FF4900;
    border-radius: 5px;
    transform: rotate(180deg) translateY(40px);
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

    &.show {
        z-index: 9;
        opacity: 1;
        transform: rotate(180deg) translateY(0);
    }
    svg {
        path {
            transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
        }
    }

    &:hover {
        background-color: #fff;
    
        svg {
            path {
            transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
            fill: #FF4900;
            }
        }
    }

    @media( max-width: 1441px ) {
        right: 1%;
    }

    @media( max-width: 767px) {
        right: 15px;
    }
}

.footer {
    padding-top: 80px;
    padding-bottom: 60px;
    background-color: rgba(#222,0.5);
    position: relative;

    @media( max-width: 767px ) {
        overflow: hidden;
    }

        .content-wrapper {
            width: 100%;
        }
        .footer-links {
            margin-top: 20px;
        ul {
            margin-bottom: 40px;

            li {
                a {
                    font-size: 1.25rem;
                    color: #fff;
                    font-weight: 500;
                    position: relative;
                    &:after {
                    content:'';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: -2px;
                    left: 0;
                    background-color: #fff;
                    transform: scaleX(0);
                    transform-origin: bottom right;
                    transition: transform 0.3s;
                    }
                    &:hover {
                        &:after {
                            transform-origin: bottom left;
                            transform: scaleX(1);
                        }
                    }
                }
                & + li {
                    padding-left: 14px;
                    margin-left: 14px;
                    border-left: 2px solid #fff;
                }
            }
        }
        .row {
            margin: 0 auto 50px;
            position: relative;
            left: 30px;
            @media( max-width: 767px ) {
                left: 0;
            }
        }
    }
    .social {
        max-width: 150px;
        .socail-links {
            padding-bottom: 14px;

            &::before {
                content: '';
                position: absolute;
                background-color: #FF4900;
                border: 1px solid #FF4900;
                height: 80px;
                width: 40%;
                bottom: 60px;
                left: -20%;
                z-index: 0;
                border-radius: 10px;
                transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

                @media( max-width: 768px ) {
                    left: -10%;
                }

                @media( max-width: 767px ) {
                    left: -2%;
                    width: 55%;
                }
            }

            li {
                position: relative;
                .icon {
                    max-height: 50px;
                    max-width: 50px;
                    path,rect {
                    fill: #fff;
                    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
                }
            }

            & + li {
                margin-left: 25px;
            }            
        }
    }
    &:hover {
        .socail-links {
            &::before {
                background-color: transparent;
            }
        }
        li {
            .icon {
                path,rect {
                    fill: #FF4900;
                }
            }
        }
    }
    
}
`;

export const ContacTBoxStyles =  styled.div`
.content-wrapper {
    max-width: 100%;
    border-radius: 10px;
    .icon-wrapper {
        position: relative;
        width: 49px;
        height: 49px;
        border-radius: 50%;
        border: 1px solid #6B6B6B;
        margin-right: 25px;
        transition: 0.35s ease-in-out;

        svg {
            path {
                 transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);
            }
        }
    }
    .info-box {
        .tite {
            font-weight: 300;
            color: #6B6B6B;
            font-size: 1.125rem;
            line-height: 25px;
            display: inline-block;
            width: 100%;
            text-align: left;
            margin-bottom: 2px;
        }
        a {
            font-weight: 300;
            color: #fff;
            font-size: 22px;
            line-height: 25px;
        }
    }
    &:hover {
        .icon-wrapper {
            border-color: #fff;
            svg {
                path {
                    fill:#FF4900;
                }
            }
        }
    }
}

@media( max-width: 767px ) {
    & + .contact-box {
        margin-top: 30px;
    }
}
`;

export const SkilLSectionStyle = styled.div`
&   {
    padding: 100px 0;

    .button-wrapper {
        margin: 40px auto 0;
        text-align: center;
        padding-bottom: 20px;
    }

    .label {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 26px;
        margin: 40px 0 30px;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 10px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            height: 2px;
            width: 150px;
            background: #FF4900;
        }
    }

    @media( max-width: 768px ) {
        padding: 80px 0;
    }
    
    @media( max-width: 767px ) {
        padding: 60px 0;
    }
}
`;

export const ProjectListingStyles = styled.div`
.title {
    margin-bottom: 60px;
}
@media( max-width: 1024px ) {
    padding: 0 0 80px;
}

@media( max-width: 767px ) {
    .title {
        font-size: 1.875rem;
        margin-bottom: 40px;
}
    }
}
`;

export const SkilLSectionStyles = styled.div`
&   {
    padding: 100px 0;

    .button-wrapper {
        margin: 40px auto 0;
        text-align: center;
        padding-bottom: 20px;
    }

    .label {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 26px;
        margin: 40px 0 30px;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 10px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            height: 2px;
            width: 150px;
            background: #FF4900;
        }
    }

    @media( max-width: 768px ) {
        padding: 60px 0;
    }
}
`;

export const PersonaLSkillsStyles = styled.div`
&   {
    padding: 50px 0 100px;
    background: url('../../../assets/images/work.png') no-repeat;
    background-attachment: fixed;
    background-position: 56% 240px;

    .title {
        font-weight: 500;
        color: #fff;
        font-size: 2.5rem;
        line-height: 3.125rem;
        margin-bottom: 20px;
    }

    .subtitle {
        color: #fff;
        font-size: 1.125rem;
        line-height: 2.1875rem;
        font-weight: 300;
        position: relative;
        padding-bottom: 20px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            height: 2px;
            width: 250px;
            background: #FF4900;
        }
    }

    .skills-wrapper {
        margin-top: 75px;
        width: 100%;
        position: relative;

        .box {
            width: 100%;
            flex: 0 1 50%;
            max-width: 50%;

            .type {
                font-size: 1.25rem;
                padding: 0 20px;
                line-height: 2.125rem;
                background: #FF4900;
                color: #fff;
                height: 34px;
                margin-bottom: 20px;
                display: inline-block;
            }

            ul {
                width: 100%;
            }

            li {
                height: 40px;

                span {
                    line-height: 1.875rem;
                    font-size: 1rem;
                    color: #fff;
                    letter-spacing: 0.5px;
                }

                svg {
                    width: 20px;
                }
            }

            &.soft {
                text-align: right;

                li {
                    padding-right: 25px;

                    svg {
                        margin-left: 15px;
                    }
                }
            }

            &.hard {
                border-left: 2px solid #FF4900;
                padding-top: 310px;

                li {
                    padding-left: 25px;

                    svg {
                        margin-right: 15px;
                    }
                }
            }
        }
    }

    @media( max-width: 1025px ) {
        padding: 0 0 80px;
    }

    @media( max-width: 768px ) {
        padding: 0 0 60px;

        .subtitle {
            text-align: center;
        }
    }

    @media( max-width: 767px ) {
        .skills-wrapper {
            flex-wrap: wrap;
            .box {
                flex: 0 1 100%;
                max-width: 100%;
                &.soft {
                    text-align: left;
                    border-left: 2px solid #FF4900;

                    li {
                        justify-content: flex-end;
                        padding-left: 25px;
                        padding-right: 0;
                        flex-direction: row-reverse;

                        svg {
                            margin-left: 0;
                            margin-right: 15px;
                        }
                    }
                }
                &.hard {
                    padding-top: 30px;
                }
            }
        }
    }
    
}
`;

export const PagEHeadingStyles = styled.div`
&   {
    height: 100vh;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7;
        z-index: 1;
    }

    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: #111;
        bottom: -75%;
        left: 0;
        right: 0;
        z-index: 1;
        transform-origin: bottom right;
        transform: skewY(-6deg);
    }

    img {
        position: absolute;
        top: -93%;
        left: 0%;
        z-index: 0;
        transform: scale(0.6);
    }

    .container {
        position: relative;
        top: -10%;
        z-index: 2;

        .main-title {
            font-size: 3.75rem;
            line-height: 4.375rem;
            margin-bottom: 20px;
            color: #fff;
            font-weight: 600;
        }

        .subtitle {
            font-size: 1.375rem;
            line-height: 1.875rem;
            font-weight: 300;
            color: #fff;
        }
    }

    &.projects-page {
        img {
            transform: scale(1);
        }
    }

    
    @media( max-width: 1441px ) {
        &.about-page {
            img {
                top: -65%;
            }
        }
    }

    @media( max-width: 1367px ) {
        &.about-page {
            img {
                top: -50%;
            }
        }
    }

    @media( max-width: 1281px ) {
        &.about-page {
            img {
                top: -60%;
            }
        }
    }

    @media( max-width: 1024px ) {
        img {
            top: -70%;
        }

        &.about-page {
            img {
                top: -50%;
            }
        }
    }

    @media( max-width: 768px ) {
        img {
            top: 0%;
        }

        &.about-page {
            img {
                top: -10%;
                transform: scale(1);
            }
        }
    }

    @media( max-width: 767px ) {
        height: 70vh;
        &:before {
            opacity: 0.9;
        }

        .container {
            .main-title {
                font-size: 3.125rem;
            }
            .subtitle {
                text-align: center;
            }
        }

        &.about-page {
            img {
                top: -15%;
            }
        }
    }
}
`;

export const modalStyles = styled.div`
&   {
    position: fixed;
    width: 70%;
    height: 70%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ff6122;
    -webkit-box-shadow: 0px 2px 20px 1px rgba(17, 17, 17, 1);
    -moz-box-shadow: 0px 2px 20px 1px rgba(17, 17, 17, 1);
    box-shadow: 0px 2px 20px 1px rgba(17, 17, 17, 1);
    z-index: -100;
    opacity: 0;
    transform: scale(1.1);
    transition: 0.35s cubic-bezier(0.07, 0.08, 0.16, 0.99);

    &.active {
        z-index: 100;
        opacity: 1;
        transform: scale(1);
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;

        svg {
            width: 30px;
            height: 30px;

            path {
                fill: #fff;
            }
        }
    }

    .wrapper {
        max-width: 100%;
    }

    .modal-content {
        width: 100%;
        height: 100%;
        padding: 20px;

        .content-wrapper {
            height: 100%;

            .wrapper {
                h2 {
                    margin-bottom: 60px;
                    text-align: center;
                    color: #fff;
                    font-size: 2.875rem;
                }

                .btn {
                    width: 31%;
                    margin: 40px auto 0;
                    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
                    background-color: #fff;
                    border-color: #fff;
                    color: #111;

                    &:hover {
                        transform: scale(0.95);
                    }
                }

            }

            @media( max-width: 1025px ) {
                .wrapper {
                    h2 {
                        margin-bottom: 40px;
                    }
                    .btn {
                        margin: 30px auto 0;
                    }
                }
            }

            @media( max-width: 767px ) {
                .wrapper {
                    h2 {
                        font-size: 36px;
                    }
                    .btn {
                        width: 100%;
                    }
                }
            }
        }
    }

    @media( max-width: 768px ) {
        width: 80%;
        height: 80%;
    }

    @media( max-width: 767px ) {
        width: 90%;
        height: 90%;
    }
}
`;

export const ProjectsSectionStyles = styled.div`
&   {
    padding-top: 0;

    .btn-wrapper {
        margin: 100px auto 0;
        text-align: center;
        padding-bottom: 20px;
    }

    .slide {
        outline: none !important;
    }
}
`;

export const AboutHomeStyles = styled.div`
&   {
    padding: 120px 0;

    .box {
        flex: 0 1 50%;
        max-width: 50%;
        padding-left: 80px;

        &.image-wrapper {
            position: relative;

            img {
                filter: grayscale(100%);
            }
        }

        .svg {
            position: absolute;
            bottom: -80px;
            left: 0px;
        }

        &.text-content {
            .title {
                font-size: 2.5rem;
                line-height: 3.125rem;
                font-weight: 500;
                color: #fff;
                margin-bottom: 42px;
            }

            .content {
                margin-bottom: 85px;
                max-width: 650px;

                p {
                    font-size: 1.125rem;
                    line-height: 2.1875rem;
                    font-weight: 300;
                    color: #fff;
                }
            }

            button {
                &:first-child {
                    margin-right: 20px;
                }
            }
        }

    }
    @media( max-width: 1281px ) {
        .box {
            .svg {
                max-width: 200px;
            }
        }
    }
    @media( max-width: 1025px ) {
        padding: 120px 0 60px;
        .box {
            padding-left: 0px;
            .svg {
                left: -25px;
            }
            &.text-content {
                padding-left: 40px;
                padding-top: 50px;
                .title {
                    margin-bottom: 30px;
                }
                .content {
                    margin-bottom: 40px;
                }
            }
        }
    }

    @media( max-width: 768px ) {
        .box {
            flex: 0 1 100%;
            max-width: 100%;
            &.image-wrapper {
                max-height: 400px;
                overflow: hidden;
                .svg {
                    left: 28px;
                    bottom: 0;
                }
            }
            &.text-content {
                padding-left: 0;
            }
        }
    }

    @media( max-width: 767px ) {
        .box {

            &.text-content {

                .title {
                    font-size: 1.875rem;
                    margin-bottom: 20px;
                }
                
                .content {
                    p {
                        font-size: 1.125rem;
                        line-height: 2rem;
                    }
                }
            }
            
            &.image-wrapper {
                .svg {
                    max-width: 150px;
                }
            }
        }
    }
}
`;

export const HeroSectionStyles = styled.div`
    &   {
        overflow: hidden;
        position: relative;

        .box {
            flex: 0 1 50%;
            max-width: 50%;

            &.image-wrapper {
                overflow: hidden;
                min-height: 953px;

                img {
                    position: absolute;
                    top: -58px;
                    left: 26%;
                    width: auto;
                    height: auto;
                    min-height: 953px;
                    z-index: 0;
                }
            }

            &.text-content {
                .content-wrapper {
                    position: relative;
                    z-index: 1;
                    transform: translateY(-100px);

                    .title {
                        font-size: 5rem;
                        line-height: 6.25rem;
                        margin-bottom: 18px;
                        color: #fff;
                        position: relative;

                        &::before {
                            content: attr(data-tooltip);
                            position: absolute;
                            top: -85px;
                            left: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #FF4900;
                            color: #fff;
                            width: 200px;
                            height: 64px;
                            font-size: 1.375rem;
                            font-weight: 300;
                            line-height: 2.0625rem;
                            border-radius: 5px;
                        }

                        &::after {
                            content: "";
                            position: absolute;
                            top: -22px;
                            left: 40px;
                            width: 0;
                            height: 0;
                            border-style: solid;
                            border-width: 20px 20px 0 0;
                            border-color: #FF4900 transparent transparent transparent;
                        }
                    }

                    .subtitle {
                        font-size: 1.375rem;
                        line-height: 2.0625rem;
                        color: #fff;
                        font-weight: 300;
                        margin-bottom: 67px;
                    }

                    .buttons-wrapper {
                        .btn {
                            &:first-child {
                                margin-right: 20px;
                            }
                        }
                    }
                }
            }
        }
        @media( max-width: 1441px ) {
            .box.image-wrapper {

                img {
                    left: 10%;
                }
            }
        }
        @media( max-width: 1300px ) {
            .box {

                &.text-content {
                    .content-wrapper {
                        .title {
                            font-size: 4rem;
                        }
                    }
                }

                &.image-wrapper {
                    min-height: 785px;

                    img {
                        min-height: auto;
                    }
                }
            }
        }

        @media( max-width: 1025px ) {
            .box {
                &.text-content {
                    margin-top: 100px;
                    .content-wrapper {
                        transform: none;
                        .title {
                            margin-bottom: 14px;
                            &::before {
                                top: -73px;
                                width: 159px;
                                height: 51px;
                            }
                        }
                        .subtitle {
                            margin-bottom: 35px;
                        }
                    }
                }
                &.image-wrapper {
                    min-height: 585px;
                }
            }
        }
        @media( max-width: 768px ) {
            .container {
                padding: 0;
            }

            .row {
                flex-wrap: wrap;
            }

            .box {
                flex: 0 1 100%;
                max-width: 100%;

                &.text-content {
                    position: absolute;
                    margin-top: 0;
                    bottom: -41%;
                    left: 0;
                    height: 100%;
                    padding: 0 30px;

                    .content-wrapper {

                        .title {
                            font-size: 3rem;
                            line-height: 4.25rem;
                            &::before {
                                width: 112px;
                                height: 42px;
                                font-size: 1rem;
                                top: -63px;
                            }
                            &::after {
                                top: -25px;
                            }
                        }

                        .subtitle {
                            font-size: 23px;
                            line-height: 23px;
                        }
                    }
                }

                &.image-wrapper {
                    min-height: auto;
                    
                    img {
                        position: relative;
                        left: 0;
                        top: 0;
                    }
                }
            }
        }

        @media( max-width: 767px ) {
            overflow: visible;
            margin-bottom: 28px;
            .box {
                &.text-content {
                    bottom: -62%;
                    .content-wrapper {
                        .title {
                            font-size: 30px;
                            line-height: 48px;
                            margin-bottom: 0px;
                        }
                        .subtitle {
                            font-size: 16px;
                            line-height: 23px;
                            margin-bottom: 80px;
                        }
                    }
                }
            }
        }
        @media( max-width: 321px ) {
            .box {
                &.text-content {
                    bottom: -56%;
                    .content-wrapper {
                        .subtitle {
                            margin-bottom: 65px;
                        }
                    }
                }
                
            }
        }
    }
`;