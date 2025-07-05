// faq.jsx
import React from 'react';
import FaqItem from './OnscrollAni/FaqItem.jsx';

const Faq = () => {
  const faqList = [
    {
      question: 'What is 0xGenIgnite?',
      answer:
        "0xGenIgnite is not just another hackathon; it's a tech festival of innovation, culminating in a spectacular grand conclusion. We are bringing together the brightest, most ambitious tech talent from across the region for an unparalleled journey of coding, creativity, and problem solving."
    },
    {
      question: 'Who can attend the hackathon?',
      answer:
        'We invite any high school, undergraduate, or graduate students to participate in HackMela! You do not need to be enrolled at SRM University to attend, but the event will be taking place at the University.'
    },
    {
      question: 'How do I register?',
      answer:
        'You can register by filling out the registration form, by clicking the registration button on the home page of this site! which will take you to the HackMela1.0 dashboard on Devfolio.'
    },
    {
      question: 'What do I make?',
      answer:
        'You can make anything you want! Web3 or AI based projects are all encouraged and welcome! However, we strongly discourage building upon existing projects, as they will not be eligible for prizes.'
    },
    {
      question: 'What is the cost to attend it?',
      answer: 'HackMela is FREE to participate for all Techies!!'
    },
    {
      question: 'What should I bring?',
      answer:
        'Hackathon Survival Kit:\nDon’t Forget! Laptop & Charger: Your ultimate power duo! Headphones: For that perfect focus vibe. Pillow/Blanket: Nap like a champ! Deodorant: Stay fresh, stay cool. Pack smart, hack smarter! Let’s go!'
    },
    {
      question: 'I applied! What happens next?',
      answer:
        "We will be reviewing applications on a rolling basis, so keep an eye on your email - that's how you'll hear back from us about decisions."
    },
    {
      question: 'Will there be FREE FOOD provided?',
      answer:
        'Yes, and we accommodate all dietary restrictions, including vegans, vegetarians, halal, Gluten Free, and all allergies! Simply inform us of any such restrictions on the registration form!'
    }
  ];

  return (
    <div id='faq' className='z-10 text-white bg pt-10 px-[5vw]'>
      <h1 className='text-center text-5xl font-bold p-5'>FAQs</h1>
      <div className='flex justify-center flex-col md:flex-row w-full gap-6'>
        <div className='flex flex-col gap-3 md:w-1/2'>
          {faqList.slice(0, 4).map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className='flex flex-col gap-3 md:w-1/2'>
          {faqList.slice(4).map((faq, index) => (
            <FaqItem key={index + 4} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;