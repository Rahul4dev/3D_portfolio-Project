/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>
      <div className="mt-1 text-white">
        <p className="tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback by ${name}`}
            className="w-20 h-20 rounded-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
