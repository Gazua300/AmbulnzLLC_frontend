import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { url } from '../../constants/urls'
import axios from 'axios'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  form{
    margin-top: 10vh;
    margin-bottom: 10px;
  }
  fieldset{
    width: 27vw;
    text-align: center;
    padding: 20px;
    box-shadow: 3px 3px 6px black;
  }
  legend{
    font-size: 1.3rem;
  }
  input{
    margin-bottom: 15px;
    background: transparent;
    width: 200px;
    height: 30px;
    font-size: 13.5pt;
    color: whitesmoke;
  }
  button{
    background-color: goldenrod;
    border-radius: 10px;
    cursor: pointer;
  }
`



//========================================Component=============================
const Login = ()=>{
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email:'teste@email.com',
    password:'senha'
  })


  useEffect(()=>{
    const token = localStorage.getItem('token')

    if(token){
      navigate('/adm')
    }
  }, [])


  const onChange = (e)=>{
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }


  const login = (e)=>{
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post(`${url}/login`, body).then(res=>{
      localStorage.setItem('token', res.data.access_token)
      navigate('/adm')
    }).catch(err=>{
      alert(err.response.data)
    })
  }

//=======================================Render=========================================
  return(
    <Container>
      <form onSubmit={login}>
        <fieldset>
          <legend>Login</legend>
          <input type='email' name='email' value={form.email} onChange={onChange}
            placeholder='teste@gmail.com' required/>
          <input type='password' name='password' value={form.password} onChange={onChange}
            placeholder='senha' required/>
          <div>
            <button>Entrar</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=> navigate('/')}>
              Voltar
            </button>
          </div>
        </fieldset>
      </form>

    </Container>
  )
}
export default Login
