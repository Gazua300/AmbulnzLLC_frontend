import { Routes, Route } from 'react-router-dom'
import GlobalState from '../global/GlobalState'
import Home from '../pages/Home/Home'
import Details from '../pages/Details/Details'
import Login from '../pages/Adm/Login'
import Adm from '../pages/Adm/Adm'
import Edit from '../pages/Edit/EditPage'



const Router = ()=>{
  return(
    <GlobalState>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/details' element={<Details/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/adm' element={<Adm/>}/>
        <Route exact path='/edit' element={<Edit/>}/>
      </Routes>
    </GlobalState>
  )
}
export default Router
