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
    color: goldenrod;
  }
  button{
    background-color: goldenrod;
    border-radius: 10px;
    cursor: pointer;
  }
`

//====================================Component=================================
const Header = ()=>{
  const navigate = useNavigate()

  return(
    <Container>
      <h2>Labe-Hut</h2>
      <button onClick={()=> navigate('/login')}>
        Área de Adm
      </button>
    </Container>
  )
}
export default Header
