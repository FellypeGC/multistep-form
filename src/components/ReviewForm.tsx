import {
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

type ReviewForm = {
  data: {
    review: string;
    comment: string
  }
  updateFieldHandler: (key: string, value: string) => void;
}

const ReviewForm = ({ data, updateFieldHandler }: ReviewForm) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 w-full max-w-[320px] mx-auto sm:justify-center sm:gap-8 sm:max-w-120">
        <label className="flex flex-col items-center text-center relative cursor-pointer">
          <input
            className="peer opacity-0 absolute top-4.75 left-7.5"
            type="radio" 
            value="unsatisfied" 
            name="review" 
            required 
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill className="text-[1.6rem] transition duration-300 hover:fill-[#7076f4] peer-checked:fill-[#7076f4]" />
          <p className='italic font-light text-[.7rem] mt-[.4rem]'>Unsatisfied</p>
        </label>
        <label className="flex flex-col items-center text-center relative cursor-pointer">
          <input
            className="peer opacity-0 absolute top-3.75 left-7.5" 
            type="radio" 
            value="neutral" 
            name="review" 
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill className="text-[1.6rem] transition duration-300 hover:fill-[#7076f4] peer-checked:fill-[#7076f4]" />
          <p className="italic font-light text-[.7rem] mt-[.4rem]">Could be better</p>
        </label>
        <label className="flex flex-col items-center text-center relative cursor-pointer">
          <input
            className="peer opacity-0 absolute top-2 left-4" 
            type="radio" 
            value="satisfied" 
            name="review" 
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)} 
          />
          <BsFillEmojiSmileFill className="text-[1.6rem] transition duration-300 hover:fill-[#7076f4] peer-checked:fill-[#7076f4]" />
          <p className="italic font-light text-[.7rem] mt-[.4rem]">Satisfied</p>
        </label>
        <label className="flex flex-col items-center text-center relative cursor-pointer">
          <input
            className="peer opacity-0 absolute top-2 left-4" 
            type="radio" 
            value="very_satisfied" 
            name="review" 
            required 
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill className="text-[1.6rem] transition duration-300 hover:fill-[#7076f4] peer-checked:fill-[#7076f4]" />
          <p className="italic font-light text-[.7rem] mt-[.4rem]">Very satisfied</p>
        </label>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="font-bold text-[#777] text-[.9rem]" htmlFor="comment">Comment</label>
        <textarea 
          className="p-[.6rem] border border-gray-200 rounded-[3px] shadow-[rgba(99,99,99,.2)_0_2px_8px_0] h-30 focus:outline-[#7076f4]"
          name="comment" 
          id="comment" 
          placeholder="Tell us about your experience with the product" 
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm