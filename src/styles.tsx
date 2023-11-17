import styled from 'styled-components';

export const GLOBAL_BG = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  
`;

export const HEADER = styled.header`
  width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    img{
      width: 100px;
      transform: translateY(5px)
    }
    nav{
      width: 100px;
      a{
        color: black;
        font-size: 20px;
        text-decoration: none;
      }
    }
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
        position: relative;
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 1s;
        &:hover {
          h2{
            transition: 1s;
            color: white;
          }
          img{
            transition: 1s;
            filter: blur(3px) brightness(60%);
          }
        }
        h2{
          transition: 1s;
          color: transparent;
          width: 80%;
        }
        label{
          position: absolute;
          right: 20px;
          bottom: 20px;
          transform: scale(200%);
          color: #880000;
          transition: 1s;          
          cursor: pointer;
        }
        label:hover{
          color: red;
          transition: 1s;          
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
          z-index: -1;
        }
      }
    }
`;
