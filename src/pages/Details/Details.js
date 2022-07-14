import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import Headers from '../../components/Headers'
import Context from '../../global/Context'
import axios from 'axios'
import { url } from '../../constants/urls'
import {
  Container,
  Card,
  Title,
  Photo,
  BtnContainer
} from './styled'



//==============================Component====================================
const Details = ()=>{
  const { states, setters } = useContext(Context)
  const detail = states.detail
  const navigate = useNavigate()
  const [qnt, setQnt] = useState('')
  


  const userById = ()=>{
    const headers = {
      headers: {
        authorization: localStorage.getItem('login') 
      }
    }
    axios.get(`${url}/user`, headers).then(res=>{
      setters.setUser(res.data)
    }).catch(e=>{
      alert(e.response.data)
    })
  }


  useEffect(()=>{
    const token = localStorage.getItem('token')
    const login = localStorage.getItem('login')

    if(token){
      navigate('/adm')
    }

    if(!login){
      navigate('/')
    }

    userById()
    
  }, [])


  const handleQnt = (e)=>{
    setQnt(e.target.value)
  }


  const order = ()=>{
    const body = {
      pizza: detail.name,
      quantity: qnt
    }

    const decide = window.confirm(`
      Pizza: ${detail.name}
      Preço: ${detail.price}
      Quantidade: ${qnt}
      Total: ${qnt * detail.price}
    `)

    if(decide){
      axios.post(`${url}/orders`, body).then(res=>{
        alert(`Venda realizada, entraremos em contato com ${states.user.phone}`)
      }).catch(err=>{
        alert(err.response.data)
      })
    }

  }

//================================Render================================
  return(
        <Container>
          <Headers/>
          <Card key={detail.id}>
            <Title>{detail.name}</Title>
            <Photo src={detail.photo} alt=''/><p>
            Preço: R$ {detail.price}.00<br/>
            Quantidade:&nbsp;
            <input type='number' min='1'
              value={qnt} onChange={handleQnt}/>
            <BtnContainer>
              <button onClick={order}>
                Confirmar Pedido
              </button>
              <button onClick={()=> navigate(-1)}>Voltar</button>
            </BtnContainer>
            </p>
          </Card>
        </Container>
  )
}
export default Details
