import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import { experiences } from '../constants';
import { ExperienceCard } from './UI';
import { SectionWrapper } from '../HOC';
import { textVariant } from '../utils/motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Have Done So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={i} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
