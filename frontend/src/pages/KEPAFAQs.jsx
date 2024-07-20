import React, { useState } from 'react';

const KEPAFAQs = [
  {
    id: 1,
    question: 'What is Kepa?',
    answer: 'Imagine having a personal travel agent in your pocket, 24/7. Using AI technology, Kepa is your answer to fun, easy travel planning, offering up personalized recommendations, itineraries, and travel advice at no cost to you.'
  },
  {
    id: 2,
    question: 'Is Kepa free to use?',
    answer: 'Yes, Kepa is a 100% free travel planner, at your service!'
  },
  {
    id: 3,
    question: 'How does Kepa create personalized recommendations?',
    answer: 'Kepa curates recommendations by asking you a few simple questions about your unique travel style, preferences, and requirements. By answering these questions, you give Kepa the ability to make sure every aspect of your trip is tailored perfectly to your wants and needs.'
  }
];

const FaqItem = ({ faq, onClick, isOpen }) => (
  <div className="faq-item">
    <h3 className="faq-question" onClick={() => onClick(faq.id)}>
      {faq.question}
      {isOpen ? (
        <i className="ri-arrow-up-s-line"></i>
      ) : (
        <i className="ri-arrow-down-s-line"></i>
      )}
    </h3>
    {isOpen && <p className="faq-answer">{faq.answer}</p>}
  </div>
);

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  const handleFaqClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faqs"> 
    <br></br> <br></br> <br></br> <br></br> <br></br>
      <h2 className="faqs-title">FAQs</h2>
      <div className="faq-items-container">
        {KEPAFAQs.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            onClick={handleFaqClick}
            isOpen={openId === faq.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
