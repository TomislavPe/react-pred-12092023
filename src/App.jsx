import './App.css'
import ClassKomponenta from './ClassKomponenta'
import FunctionKomponenta from './FunctionKomponenta'

function App() {
  return (
    <>
      <ClassKomponenta title="Klasna komponenta"/>
      <FunctionKomponenta title="Funkcijska komponenta" ime="Matej" godine={40}/>
      <FunctionKomponenta title="Funkcijska komponenta" ime="Sebastian" godine={25}>
        <p>Dodatan opis...</p>
      </FunctionKomponenta>
    </>
  )
}

export default App
