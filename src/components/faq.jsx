// faq.jsx
import React from 'react';
import FaqItem from './OnscrollAni/FaqItem.jsx';

const Faq = () => {
  const faqList = [
    {
      question: "So… what exactly is 0xGenIgnite? A sci-fi sequel?",
      answer:
        "Close. But instead of aliens, we have coders. 0xGenIgnite is a full-blown tech fiesta — think innovation, caffeine, chaos, and code. It’s the Avengers Assemble moment of builders. Minus the capes (unless you bring your own)."
    },
    {
      question: "Can I attend, or is this an elite coder cult?",
      answer:
        "If you're a high schooler, college student, or someone who knows how to click buttons and dream big — you're in. No cult robes required, just curiosity and caffeine."
    },
    {
      question: "Okay, but how do I even register?",
      answer:
        "Click that giant 'Register' button you definitely didn't miss on our homepage. It'll teleport you straight to Unstop — no magic wand required."
    },
    {
      question: "What can I build? A rocket? A toaster that tweets?",
      answer:
        "Absolutely. As long as it’s not your college assignment in disguise. Build something groundbreaking — like an AI that judges memes or a fridge that DMs you when you're out of Red Bull. Just keep it original, mildly useful, and not already trending on Product Hunt."
    },
    {
      question: "How much do I need to bribe you to attend?",
      answer:
        "Unless your name is Elon Musk, you’re not paying a dime. It’s free — like Wi-Fi at a coffee shop, but with better code and fewer people pretending to write novels. Just bring your brain, your laptop, and enough energy drinks to survive a zombie apocalypse."
    },
    {
      question: "What should I pack — aside from dreams and anxiety?",
      answer:
        "Laptop (duh), charger (don’t forget it, please), headphones (your noise-canceling bffs), a pillow (you *will* crash), and your favorite hoodie. Bonus: deodorant = friends."
    },
    {
      question: "I applied. Now what? Do I just wait and age?",
      answer:
        "Patience, young Padawan. We review applications in waves. You’ll hear from us via email — no carrier pigeons involved."
    },
    {
      question: "Be honest… is there free food or just broken dreams?",
      answer:
        "Oh, we FEED you. And yes, we respect all diets — vegan, gluten-free, oxygenarian... just let us know. No hacker codes hungry."
    }
  ];



  return (
    <div id='faq' className='z-10 text-white bg pt-10 px-[5vw] pb-5'>
      <h1 className='text-center text-5xl font-bold p-5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>FAQs</h1>
      <div className='flex justify-center flex-col md:flex-row w-full gap-6'>
        <div className='flex flex-col gap-3 md:w-1/2'>
          {faqList.slice(0, 4).map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} className='' />
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