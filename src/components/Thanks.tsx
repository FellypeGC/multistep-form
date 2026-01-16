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
  unsatisfied: <BsFillEmojiFrownFill className="ml-1.25 text-[#333]"  />,
  neutral: <BsFillEmojiNeutralFill className="ml-1.25 text-[#333]" />,
  satisfied: <BsFillEmojiSmileFill className="ml-1.25 text-[#333]" />,
  very_satisfied: <BsFillEmojiHeartEyesFill className="ml-1.25 text-[#333]" />,
}

type ThanksProps = {
  data: {
    name: string,
    review: string,
    comment: string,
  }
}

const Thanks = ({ data }: ThanksProps) => {
  let discount: number = Math.floor(Math.random() * 20 + 1);

  return (
    <div className="text-center">
      <h2 className="mb-4 font-medium">Almost done...</h2>
      <p className="text-[.9rem] mb-2 text-start">
        Your feedback is very important to us {data.name}. Soon you will receive a coupon via email with a {discount}% discount coupon for your next purchase!
      </p>
      <p className="text-[.9rem] mb-2 text-start">To complete your evaluation, please click the Send button below.</p>
      <h3 className="text-left my-4 mx-0">Here is the summary of your evaluation {data.name}:</h3>
      <p className="text-left flex items-center font-bold">
        <span className="font-bold text-[#333]">Satisfaction with the product:</span> {emojiData[data.review as keyof typeof emojiData]}
      </p>

      <p className="text-left">
        <span className="font-bold text-[#333]">Comment:</span> {data.comment}
      </p>
    </div>
  )
}

export default Thanks