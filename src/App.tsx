import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from './Link'
import { HomePage } from './pages/Home'
import { UsuariosPage } from './pages/Usuario.page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link rutaLink='https://vite.dev' rutaImg={viteLogo}/>
        <Link rutaLink='https://react.dev' rutaImg={reactLogo}/>
      </div>
      <h1 >VitE + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HomePage />
      <UsuariosPage/>
    </>
  )
}

export default App
