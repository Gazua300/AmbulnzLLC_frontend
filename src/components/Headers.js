import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background-image: url('https://media.gazetadopovo.com.br/2021/07/09163516/receita-massa-pizza-bigstock-960x540.jpg');
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  h2{
    color: red;
  }
  button{
    background-color: goldenrod;
    border-radius: 10px;
    cursor: pointer;
    margin: 5px;
  }
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`



//====================================Component=================================

const Header = ()=>{
  const navigate = useNavigate()


  const logout = ()=>{
    const decide = window.confirm('Tem certeza que deseja fazer logout?')
    
    if(decide){
      localStorage.clear()
      navigate('/')
    }
  }

  return(
    <Container>
      <h2>Labe-Hut</h2>
      <BtnContainer>
        <button onClick={()=> navigate('/login')}>
          Área de Adm
        </button>
        <button onClick={logout}>Sair</button>
      </BtnContainer>
    </Container>
  )
}
export default Header
