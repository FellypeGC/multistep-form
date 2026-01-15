import "./Steps.css"

import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

type stepsProps = {
  currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>

      <div className={`flex flex-col justify-center items-center relative text-center bg-white z-10 w-40 p-2 ${currentStep >= 2 ? "font-bold text-[#7076F4]" : ""}`}>
        <FiSend className="text-2xl mb-1" />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps