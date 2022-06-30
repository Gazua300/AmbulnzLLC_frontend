import styled from 'styled-components'


export const Container = styled.div`
  box-shadow: 3px 3px 6px black;
  border-radius: 10px;
  button{
    float: right;
    background-color: goldenrod;
    border-radius: 10px;
    cursor: pointer;
  }
`
export const Card = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 590px){
    display: flex;
    flex-direction: column;
  }
`
export const Ingredients = styled.div`
  width: 30vw;

  @media(max-width: 590px){
    width: 80vw;
    margin-bottom: 2vh;
  }
`
export const IngTitle = styled.div`
  color: goldenrod;
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-shadow: 3px 3px 6px goldenrod;

  @media(max-width: 590px){
    width: 80vw;
    text-align: center;
  }
`
export const Title = styled.div`
  color: goldenrod;
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-shadow: 3px 3px 6px goldenrod;

  @media(max-width: 590px){
    text-align: center;
  }
`
export const Photo = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  cursor: pointer;

  @media(max-width: 280px){
    width: 200px;
    height: 100px;
  }
`
