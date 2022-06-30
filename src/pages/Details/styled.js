import styled from 'styled-components'


export const Container = styled.div`
  
`
export const Card = styled.div`
  position: absolute;
  left: 33%;
  text-align: center;
  width: 30vw;
  line-height: 30px;
  input{
    width: 40px;
  }  
`
export const Title = styled.div`
  color: goldenrod;
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-shadow: 3px 3px 6px goldenrod;
`
export const Photo = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;

  @media(max-width: 780px){
    position: relative;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media(max-width: 280px){
    width: 200px;
    height: 100px;
  }
`
export const BtnContainer = styled.div`
  button{
    background-color: goldenrod;
    margin: 3px;
    border-radius: 10px;
    cursor: pointer;
  }
`
