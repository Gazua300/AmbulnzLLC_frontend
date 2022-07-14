import { useState, useEffect, useContext } from 'react'
import Context from '../../global/Context'
import Headers from '../../components/Headers'
import axios from 'axios'
import { url } from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
  background-image: url('https://media.gazetadopovo.com.br/2021/07/09163516/receita-massa-pizza-bigstock-960x540.jpg');
  height: 10vh;
  border-radius: 10px;
  padding: 10px;
  button{
    float: right;
    margin-top: -40px;
    border-radius: 10px;
    background-color: goldenrod;
    cursor: pointer;
  }
  h2{
    color: red;
  }
  h3{
    color: red;
    text-shadow: 3px 3px 6px goldenrod;
  }
`
const Card = styled.div`
  padding: 10px;
  box-shadow: 3px 3px 6px black;
  margin: 10px;
`
const Edit = styled.button`
  position: relative;
  top: -25px;
`
const Delete = styled.button`
  position: relative;
  bottom: -25px;
`
const Msg = styled.div`
  text-align: center;
  font-size: 1.5rem;
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`



//============================================Component================================
const Adm = ()=>{
  const { setters } = useContext(Context)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [orders, setOrders] = useState([])


  useEffect(()=>{
    if(!token){
      navigate('/')
    }
    listOfOrders()
  }, [])


  const logout = ()=>{
    const decide = window.confirm('Tem certeza que deseja sair da área de Adm?')

    if(decide){
      localStorage.clear()
      navigate('/')
    }
  }

  
  const logoutAdm = ()=>{
    const decide = window.confirm('Tem certeza que deseja sair da área de Adm?')

    if(decide){
      localStorage.removeItem('token')
      navigate('/home')
    }
  }
  

  const listOfOrders = ()=>{
    const headers = {
      headers: {
        Authorization: token
      }
    }
    axios.get(`${url}/orders`, headers).then(res=>{
      setOrders(res.data)
    }).catch(err=>{
      alert(err.response.data)
    })
  }

  const editOrder = (id)=>{
    axios.get(`${url}/orders/${id}`).then(res=>{
      setters.setEdit(res.data)      
      navigate('/edit')
    }).catch(err=>{
      alert(err.response.data.message)
    })
  }
  
  const deleteOrder = (id)=>{
    const decide = window.confirm('Tem certeza que deseja excluir o pedido?')
    
    if(decide){
      axios.delete(`${url}/orders/${id}`).then(res=>{
        window.location.reload()
      }).catch(err=>{
        alert(err.response.data)
      })
    }

  }

//=======================================Render==================================
  return(
    <Container>
      <HeaderContainer>
        <h2>Labe-Hut</h2>
        <button onClick={logout}>Sair</button>
      </HeaderContainer>
      <h3>Histórico de Pedidos</h3>
      <button onClick={logoutAdm}>
        Sair de Adm
      </button>
      <div>
        {orders.length !== 0 ? orders.map(order=>{          
          return(
            <Card key={order.id}>
              <b>Sabor: </b>{order.pizza}<br/>
              <b>Preço: R$ </b>{order.price}.00<br/>
              <b>Quantidade: </b>{order.quantity}<br/>
              <b>Total: R$ </b>{order.total}.00<br/>
              <b>Data do pedido: </b>{order.date}<br/>
              <Edit onClick={()=> editOrder(order.id)}>Editar</Edit>              
              <Delete onClick={()=> deleteOrder(order.id)}>Exluir</Delete>
            </Card>
          )
        }) : <Msg>Nenhum pedido feito ainda</Msg>}
      </div>
    </Container>
  )
}
export default Adm
