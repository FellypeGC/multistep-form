import "./Thanks.css"

import type { ReactElement } from "react";

import {
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
}

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

type ThanksProps = {
  data: {
    name: string,
    review: string,
    comment: string,
  }
}

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="text-center">
      <h2 className="mb-4 font-medium">Falta pouco...</h2>
      <p className="text-[.9rem] mb-2 text-start">
        A sua opinião é muito importante. Em breve você receberá um cupom de 10% de desconto para a sua próxima compra.
      </p>
      <p className="text-[.9rem] mb-2 text-start">Para concluir sua avaliação, por favor, clique no botão de Enviar abaixo.</p>
      <h3 className="text-left my-4 mx-0">Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="text-left flex items-center font-bold">
        <span className="font-bold text-[#333]">Satisfação com o produto:</span> {emojiData[data.review as keyof typeof emojiData]}
      </p>

      <p className="text-left">
        <span className="font-bold text-[#333]">Comentário:</span> {data.comment}
      </p>
    </div>
  )
}

export default Thanks