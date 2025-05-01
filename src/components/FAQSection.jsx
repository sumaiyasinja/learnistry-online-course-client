import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Title from './shared/Title';

const faqs = [
  {
    question: "What is Learnistry?",
    answer:
      "Learnistry is an interactive learning platform designed to empower self-learners with flexible, expert-led learning paths. Explore content at your own pace, join vibrant communities, and develop practical skills that matter.",
  },
  {
    question: "How does Learnistry work?",
    answer:
      "Choose a learning path or join live sessions with mentors. Whether you prefer structured lessons, community-driven discussion, or practical projects, Learnistry lets you learn your way—no rigid schedules or commitments.",
  },
  {
    question: "What types of courses are available?",
    answer:
      "From coding and design to marketing and entrepreneurship, Learnistry offers a variety of modern, real-world focused topics curated by industry professionals.",
  },
  {
    question: "Can I teach on Learnistry?",
    answer:
      "Absolutely! If you’re passionate about a subject and love helping others learn, apply to become a Learnistry educator. Whether you're a certified expert or a self-taught pro, there's a space for you.",
  },
  {
    question: "Do I need a subscription to use Learnistry?",
    answer:
      "No subscription required! You can pay-as-you-go for mentorships, courses, or unlock free content. Our flexible model ensures you only invest in what fits your goals.",
  },
  {
    question: "Can I access Learnistry content on mobile devices?",
    answer:
      "Yes! Learnistry is fully responsive and works seamlessly on phones and tablets. Whether you're learning during your commute or reviewing lessons on the go, our platform is optimized for a smooth mobile experience.",
  },
  {
    question: "Does Learnistry offer certificates after course completion?",
    answer:
      "Yes, many Learnistry courses include a certificate of completion to showcase your progress. Certificates are great for personal milestones and can also be shared on platforms like LinkedIn or with potential employers.",
  },
  
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto min-h-30 my-12 p-6  rounded-3xl">
    <Title title="Frequently Asked Questions" />
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg"
            >
              <span className='text-amber-800'>{faq.question}</span>
              <FiChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-3"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
