import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../constants/urls'
import styled from 'styled-components'



//ESTILIZAÇÃO

const Container = styled.div`
  background-image: url('https://media.gazetadopovo.com.br/2021/07/09163516/receita-massa-pizza-bigstock-960x540.jpg');
  height: 10vh;
  padding: 5px;
  border-radius: 5px;
  h2{
    color: red;
  }
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
  }
  button{
    background-color: goldenrod;
    border-radius: 10px;
    cursor: pointer;
  }
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


//RENDERIZAÇÃO JSX

const Login = ()=>{
    const navigate = useNavigate()
    const [form, setForm] = useState({
        phone:'',
        password:''
    })


    useEffect(()=>{
        const login = localStorage.getItem('login')

        if(login){
            navigate('/home')
        }
    }, [])


    const onChange = (e)=>{
        const{ name, value } = e.target
        setForm({...form, [name]:value})
    }


    const login = (e)=>{
        e.preventDefault()

        const body = {
            phone: form.phone,
            password: form.password
        }
        axios.post(`${url}/user/login`, body).then(res=>{
            localStorage.setItem('login', res.data.access_token)
            navigate('/home')
        }).catch(e=>{
            alert(e.response.data)
        })
    }


    return(
        <Container>
            <h2>Labe-Hut</h2>
            <InputContainer>
                <form onSubmit={login}>
                    <fieldset>
                        <legend>Login</legend>
                        <input type='tel' name='phone' value={form.phone} onChange={onChange}
                            placeholder='Telefone' required autoFocus/>
                        <input type='password' name='password' value={form.password} onChange={onChange}
                            placeholder='Senha' required/>
                        <div>
                            <button>Entrar</button>            
                        </div>
                    </fieldset>
                </form>
            </InputContainer>
        </Container>
    )
}
export default Login