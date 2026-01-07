// CSS
import './App.css'

// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// Hooks
import { useForm } from './hooks/useForm'

function App() {
  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ]

  const { 
    currentStep,
    currentComponent,
    changeStep  
  } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra. Utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <p>Passos</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>
                <GrFormPrevious />
                Voltar
              </span>
            </button>
            <button type="submit">
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
