import './App.css'
import { UsuariosPage } from './pages/Usuario.page'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UsuarioDetallePage } from './pages/UsuarioDetalle'
import { HomePage } from './pages/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/usuario' element={<UsuariosPage/>}/>
          <Route path='/usuario/detalle' element={<UsuarioDetallePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
