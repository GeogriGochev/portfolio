import styled from 'styled-components';

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