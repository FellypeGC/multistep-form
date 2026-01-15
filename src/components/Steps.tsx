import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

type stepsProps = {
  currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className="relative mx-auto mb-8 flex items-center justify-between w-full max-w-[320px] after:content-[''] after:absolute after:top-6 after:left-0 after:w-full after:border-b after:border-[#ccc] sm:max-w-120">
      <div className={`relative z-10 flex flex-col items-center bg-white px-2 py-1 w-20 sm:w-30 ${currentStep >= 0 ? "font-bold text-[#7076F4]" : ""}`}>
        <AiOutlineUser className="text-2xl mb-1" />
        <p className="text-xs sm:text-sm">Identificação</p>
      </div>

      <div className={`relative z-10 flex flex-col items-center bg-white px-2 py-1 w-20 sm:w-30
        ${currentStep >= 1 ? "font-bold text-[#7076F4]" : ""}`}>
        <AiOutlineStar className="text-2xl mb-1" />
        <p className="text-xs sm:text-sm">Avaliação</p>
      </div>

      <div className={`relative z-10 flex flex-col items-center bg-white px-2 py-1 w-20 sm:w-30 ${currentStep >= 2 ? "font-bold text-[#7076F4]" : ""}`}>
        <FiSend className="text-2xl mb-1" />
        <p className="text-xs sm:text-sm">Envio</p>
      </div>
    </div>
  )
}

export default Steps