import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <motion.div
      className='faq-item p-5 rounded-lg bg-black/20 backdrop-blur-md shadow-md'
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 8px 20px rgba(168, 85, 247, 0.5)' // Tailwind's purple-500
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className='text-xl font-semibold'>{question}</h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
            className='overflow-hidden'
          >
            <div ref={contentRef} className='w-full z-10 mt-3 text-base text-gray-300 whitespace-pre-line'>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
