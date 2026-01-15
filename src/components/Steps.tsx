import "./Steps.css"

import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

type stepsProps = {
  currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className="flex gap-16 justify-center items-center max-w-100 mx-auto relative mb-8 after:content-[''] after:absolute after:top-5 after:left-1/2 after:-translate-x-1/2 after:w-95 after:border-b after:border-[#ccc]">
      <div className={`flex flex-col justify-center items-center relative text-center bg-white z-10 w-40 p-2 ${currentStep >= 0 ? "font-bold text-[#7076F4]" : ""}`}>
        <AiOutlineUser className="text-2xl mb-1" />
        <p>Identificação</p>
      </div>

      <div className={`flex flex-col justify-center items-center relative text-center bg-white z-10 w-40 p-2 ${currentStep >= 1 ? "font-bold text-[#7076F4]" : ""}`}>
        <AiOutlineStar className="text-2xl mb-1" />
        <p>Avaliação</p>
      </div>

      <div className={`relative text-center bg-white z-10 w-40 p-2 ${currentStep >= 2 ? "font-bold text-[#7076F4]" : ""}`}>
        <FiSend className="text-2xl mb-1" />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps