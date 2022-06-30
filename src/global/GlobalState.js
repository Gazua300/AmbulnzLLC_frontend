import Context from './Context'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../constants/urls'
import { useNavigate } from 'react-router-dom'



const GlobalState = (props)=>{
  const navigate = useNavigate()
  const [pizzas, setPizzas] = useState([])
  const [detail, setDetail] = useState({})
  const [edit, setEdit] = useState({})


  useEffect(()=>{

    axios.get(`${url}/pizzas`).then(res=>{
      setPizzas(res.data)
    }).catch(err=>{
      alert(err.response)
    })

  }, [])


  const pizzaDetail = (id)=>{
    axios.get(`${url}/pizzas/${id}`).then(res=>{
      setDetail(res.data)      
      navigate('/details')
    }).catch(err=>{
      alert(err.response.data.message)
    })
  }

  
  const states = { pizzas, detail, edit }
  const setters = { setEdit }
  const requests = { pizzaDetail }

  return<Context.Provider value={{ states, setters, requests }}>
          {props.children}
        </Context.Provider>

}

export default GlobalState
