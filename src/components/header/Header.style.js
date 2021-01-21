import styled from 'styled-components';

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