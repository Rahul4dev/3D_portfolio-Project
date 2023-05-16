/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { email, email_service, template } from '../config';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../HOC';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        email_service,
        template,
        {
          from_name: form.name,
          to_name: 'Chubby',
          to_email: email,
          message: form.message,
        },
        'Fd8EgJyAW3LClo6r7'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for yor words. I will get back to you soon');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.message);
          alert('Something went wrong');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.value}
            onChange={handleChange}
            placeholder="What's Your Name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's Your Email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
          </label>
          <textarea
            name="message"
            rows="7"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to Say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outlined-none text-white w-fit font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] cursor-grab"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
