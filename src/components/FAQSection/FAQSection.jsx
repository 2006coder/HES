import React, { useState } from 'react';
import './FAQSectionStyles.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is HES?',
      answer:
        'HES stands for Health for Every Student – a platform to help students navigate healthcare.',
    },
    {
      question: 'How can I use the healthcare search engine?',
      answer:
        'You can search by entering your symptoms or selecting a disease category. Results include hospital details, reviews, and insurance information.',
    },
    {
      question: 'Question Three?',
      answer: 'Answer three.',
    },
    {
      question: 'Question Four?',
      answer: 'Answer four.',
    },
    {
      question: 'Question Five?',
      answer: 'Answer five.',
    },
    {
      question: 'Question Six?',
      answer: 'Answer six.',
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="faq-link">
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have more questions? Fill out our form.
        </a>
      </div>
    </section>
  );
};

export default FAQSection;