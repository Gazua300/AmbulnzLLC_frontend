import { useContext, useEffect } from 'react'
import Context from '../../global/Context'
import Headers from '../../components/Headers'
import { useNavigate } from 'react-router-dom'
import { Card, Title, Photo, Container, Ingredients, IngTitle } from './styled'



const Home = ()=>{
  const navigate = useNavigate()
  const { states, requests } = useContext(Context)
  const pizzas = states.pizzas


  useEffect(()=>{
    const token = localStorage.getItem('token')
    const login = localStorage.getItem('login')

    if(token){
      navigate('/adm')
    }

    if(!login){
      navigate('/')
    }
    
  }, [])


  return(
    <div>
      <Headers/>
      {pizzas && pizzas.map(pizza=>{
        return<Container>
                <Card key={pizza.id}>
                  <div>
                    <Title>{pizza.name}</Title>
                    <Photo src={pizza.photo} alt=''
                     onClick={()=> requests.pizzaDetail(pizza.id)}/>
                  </div>
                  <div>
                    <IngTitle>Ingredientes:</IngTitle>
                    <Ingredients>{pizza.ingredients}</Ingredients>
                  </div>
                  <div>
                   <button onClick={()=> requests.pizzaDetail(pizza.id)}>
                    Fazer Pedido
                   </button>
                  </div>
                </Card>
              </Container>
      })}
    </div>
  )
}

export default Home
