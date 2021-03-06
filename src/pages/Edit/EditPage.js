import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Headers from '../../components/Headers'
import Context from '../../global/Context'
import { url } from '../../constants/urls'
import axios from 'axios'
import { Container } from './styled'


const EditPage = ()=>{
    const navigate = useNavigate()
    const { states } = useContext(Context)
    const edit = states.edit
    const pizzas = states.pizzas
    const [order, setOrder] = useState('')
    const [qnt, setQnt] = useState('')
    const [flavor, setFlavor] = useState({})



    useEffect(()=>{
        const token = localStorage.getItem('token')
        const login = localStorage.getItem('login')

        if(!token){
            navigate('/login')
        }

        if(!login){
            navigate('/')
        }
        
    }, [])

    
    const handleOrder = (e)=>{
        const body = { name: e.target.value }
        setOrder(e.target.value)
        
        axios.post(`${url}/pizza`, body).then(res=>{
            setFlavor(res.data)
        })
    }

    const handleQnt = (e)=>{
        setQnt(e.target.value)
    }
    
    
    const saveChanges = (e)=>{
        e.preventDefault()
        const decide = window.confirm(`Tem certeza que deseja alterar o pedido da pizza de ${edit.pizza}`)

        const body = {
            pizza: order,
            price: flavor.price,
            quantity: qnt
        }

        if(decide){
            axios.put(`${url}/orders/${edit.id}`, body).then(res=>{
            alert(res.data)
            }).catch(err=>{
                alert(err.response.data)
            })
        }
        
    }

    

    
    return(
        <div>
            <Headers/>
            <Container>
                <form onSubmit={saveChanges}>
                    <fieldset>
                        <legend>Editar {edit.pizza}</legend>
                        <select value={order} onChange={handleOrder} required>
                            <option>Sabor</option>
                            { pizzas && pizzas.map(pizza=>{
                                return <option key={pizza.id}>{pizza.name}</option>
                            })}
                        </select><br/>
                        Pre??o: R$ {flavor.price}.00<br/>
                        Quantidade: <input type='number' min='1' value={qnt} onChange={handleQnt} required/><br/>
                        Total: R$ {
                            Object.keys(flavor).length !== 0 ? (flavor.price * qnt)
                            : 0
                        }
                        <br/><br/>
                        <button>Salvar altera????es</button>
                    </fieldset>
                </form>
            </Container>
        </div>
    )
}
export default EditPage