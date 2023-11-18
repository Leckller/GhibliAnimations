import styled from 'styled-components';

export const GLOBAL_BG = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #2b4c7e;
  scroll-behavior: smooth;
`;

export const HEADER = styled.header`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    box-shadow: 3px 3px 10px #1f1f20;
    font-variant: small-caps;
    img{
      width: 100px;
      transform: translateY(5px) scale(90%);
    }
    nav{
      width: 100px;
      a{
        color: #dce0e6;
        font-size: 20px;
        text-decoration: none;
      }
    }
`;

export const UP = styled.a`
  position: absolute;
  right: 35px;
  top: 30px;
  padding: 18px 20px;
  border-radius: 9999px;
  box-shadow: 3px 3px 10px #1f1f20;
  z-index: 1;
`;

export const MAIN = styled.main`
    width: 100vw;
    section{
      display: grid;
      margin-top: 20px;
      width: 100%;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, 350px);
      gap: 20px;
      article{
        text-decoration: none;
        position: relative;
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 1s;
        box-shadow: 3px 3px 10px black;
        &:hover {
          transition: 1s;
          box-shadow: none;
          h2{
            transition: 1s;
            color: white;
          }
          img{
            transition: 1s;
            filter: blur(3px) brightness(60%);
          }
          label{
            color: white;
          }
          a{
            color: white;
          }
        }
        h2{
          transition: 1s;
          color: transparent;
          width: 80%;
          z-index: 2;
        }
        label{
          position: absolute;
          right: 20px;
          bottom: 20px;
          transform: scale(200%);
          color: transparent;
          transition: 1s;          
          cursor: pointer;
        }
        label:hover{
          color: red;
          filter: drop-shadow(0 0 0.75rem white);
          transition: 1s;          
        }
        a{
          position: absolute;
          left: 30px;
          bottom: 25px;
          text-decoration: none;
          font-size: 1rem;
          transform: scale(200%);
          color: transparent;
          transition: 1s;          
          cursor: pointer;
        }
        a:hover{
          color: #4c4cff;
          transition: 1s;
          filter: drop-shadow(0 0 0.75rem white);
        }
        button{
          border: none;
          background-color: transparent;
        }
        img{
          position: absolute;
          transition: 1s;
          width: 100%;
          height: 100%;
        }
      }
    }
`;
