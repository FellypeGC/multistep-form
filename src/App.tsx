// CSS
import './App.css'

// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// Hooks

function App() {
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra. Utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <p>Passos</p>
        <form>
          <div className="inputs-container">
            <UserForm />
          </div>
          <div className="actions">
            <button>
              <span>
                <GrFormPrevious />
                Voltar
              </span>
            </button>
            <button>
              <span>
                Avançar
                <GrFormNext />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
