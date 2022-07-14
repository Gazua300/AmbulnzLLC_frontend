import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import Header from './components/Headers'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-image: linear-gradient(to left, whitesmoke, rgba(0, 0, 0, 0.3))
  }  
`


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Router/>
    </BrowserRouter>
  )
}

export default App;
