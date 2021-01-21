import styled from 'styled-components';

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