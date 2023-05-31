import { useState } from 'react'
import Card  from './Card'
import  './styles/app.css'
import { FormularioComponent } from './components/FormularioComponent'

function App() {

  const [submitted, setSubmitted] = useState()
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [favAnimal, setFavAnimal] = useState('')
  const [typePet, setTypePet] = useState('')
  const [fanDogs, setFanDogs] = useState(false)

  const handleSubmit = (e) => {
    console.log("hhoola")
    e.preventDefault()
    const valFavName = favAnimal.match(/^[^\s]*[A-Za-z0-9]{3}$/);
    const valName = name.match(/^[A-Za-z0-9]{6}$/);
    if(!valFavName || !valName) {
      setError('Por favor chequea que la información sea correcta');
      return
    }

    const petData = {
      name,
      favAnimal,
      typePet,
      fanDogs,
    }
    setSubmitted(petData)
    setError(null)
  }

  return (
    <div className="app-container">
      <FormularioComponent 
          handleSubmit={handleSubmit}
          setFavAnimal={setFavAnimal}
          setName={setName}
          setTypePet={setTypePet}
          setFanDogs={setFanDogs}
      />
      {error && <p className='err-msg'>{error}</p>}
      { submitted && <Card {...submitted}/> }
    </div>
  );
}

export default App;