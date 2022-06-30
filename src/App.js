import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import Header from './components/Headers'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.8));
    color: whitesmoke;
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
