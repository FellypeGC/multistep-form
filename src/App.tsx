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
        <h2 className="text-[2rem] mb-8">Give your feedback</h2>
        <p>We're happy with your purchase. Please use the form below to evaluate the product</p>
      </div>
      <div className="max-w-150 mx-auto bg-white p-6 shadow-[rgba(100,100,111,0.2)_0_7px_29px_0]">
        <Steps currentStep={currentStep} />
        <form
          className="max-w-100 mx-auto"
          onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="min-h-70">{currentComponent}</div>
          <div className="flex justify-end gap-4"> {/* actions */}
            <button
              className="flex items-center rounded-[3px] bg-[#dfdfdf] py-2 px-4 gap-2 text-[.9rem] cursor-pointer border-none hover:bg-[#cfcfcf] disabled:opacity-50 disabled:cursor-not-allowed"
              type="button" 
              onClick={() => changeStep(currentStep - 1)}
              disabled={currentStep === 0}
            >
              <GrFormPrevious />
              <span>
                Previous
              </span>
            </button>
              {!isLastStep ? (
                <button 
                  className="flex items-center rounded-[3px] bg-[#dfdfdf] py-2 px-4 gap-2 text-[.9rem] cursor-pointer border-none hover:bg-[#cfcfcf]" type="submit"
                >
                  <span>Next</span>
                  <GrFormNext />
                </button>
              ) : (
                <button
                  className="flex items-center rounded-[3px] bg-[#dfdfdf] py-2 px-4 gap-2 text-[.9rem] cursor-pointer border-none hover:bg-[#cfcfcf]" 
                  type="submit"
                  onClick={() => alert("Form submitted successfully!")}
                >
                  <span>Send</span>
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
