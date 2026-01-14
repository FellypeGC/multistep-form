// CSS
import './App.css'

// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

// Hooks
import { useState } from 'react'
import { useForm } from './hooks/useForm'

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
}

const formtemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState<FormFields>(formtemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev): FormFields => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ]

  const { 
    currentStep,
    currentComponent,
    changeStep, 
    isLastStep
  } = useForm(formComponents);

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-[2rem] mb-8">Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra. Utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className=" max-w-150 mx-auto bg-white p-6 shadow-[rgba(100,100,111,0.2)_0_7px_29px_0]">
        <Steps currentStep={currentStep} />
        <form
          className="max-w-[125] mx-auto"
          onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>
                <GrFormPrevious />
                Voltar
              </span>
            </button>
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>

  )
}

export default App
