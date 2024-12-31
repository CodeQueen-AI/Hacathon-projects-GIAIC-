// pages/index.js
'use client'
import React, { useState } from 'react';

type ReviewProps = {
  name: string;
  date: string;
  content: string;
  rating: number;
};

const reviews = [
  {
    name: 'Samantha D.',
    date: 'August 14, 2023',
    content: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to t-shirt.',
    rating: 5,
  },
  {
    name: 'Alex M.',
    date: 'August 15, 2023',
    content: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
    rating: 4,
  },
  {
    name: 'Olivia P.',
    date: 'August 17, 2023',
    content: 'As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.',
    rating: 4,
  },
  {
    name: 'Ethan R.',
    date: 'August 16, 2023',
    content: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt!',
    rating: 5,
  },
  {
    name: 'Liam K.',
    date: 'August 18, 2023',
    content: 'This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.',
    rating: 5,
  },
  {
    name: 'Ava H.',
    date: 'August 19, 2023',
    content: 'I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter!',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What is the return policy?',
    answer: 'You can return any item within 30 days of purchase if the item is unused and in its original condition.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping typically takes 5-7 business days within the contiguous United States. International shipping may take longer.',
  },
  {
    question: 'Do you offer expedited shipping?',
    answer: 'Yes, we offer expedited shipping options at checkout for an additional fee.',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes, you will receive a tracking number once your order has shipped. You can use this number to track your order online.',
  },
];

const productDetails = `
  <p>This t-shirt is made from 100% organic cotton, ensuring a soft and comfortable feel.</p>
  <ul>
    <li>Available in various sizes and colors</li>
    <li>Machine washable</li>
    <li>Eco-friendly and sustainable</li>
    <li>Designed by top UI/UX designers</li>
  </ul>
`;

const Review = ({ name, date, content, rating }: ReviewProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-2">
        <div className="text-lg font-semibold">{name}</div>
        <div className="ml-auto text-sm text-gray-500">{date}</div>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((star, index) => (
          <svg
            key={index}
            className={`w-4 h-4 fill-current ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.511 12 0 7.91l6.09-.61L10 2l3.91 5.3L20 7.91 14.49 12l1.39 6.09z" />
          </svg>
        ))}
      </div>
      <div className="text-gray-700">{content}</div>
    </div>
  );
};

type FAQProps = {
  question: string;
  answer: string;
};

const FAQ = ({ question, answer }: FAQProps) => (
  <div className="border p-4 rounded-lg shadow-sm mb-4">
    <div className="font-semibold mb-2">{question}</div>
    <div className="text-gray-700">{answer}</div>
  </div>
);

const ProductDetails = () => (
  <div
    className="border p-4 rounded-lg shadow-sm text-gray-700"
    dangerouslySetInnerHTML={{ __html: productDetails }}
  />
);

const ReviewsPage = () => {
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div className="container mx-auto p-4">
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex justify-between">
          <a
            href="#"
            onClick={() => setActiveTab('reviews')}
            className={`pb-2 px-1 ${activeTab === 'reviews' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
          >
            Reviews
          </a>
          <a
            href="#"
            onClick={() => setActiveTab('faqs')}
            className={`pb-2 px-1 ${activeTab === 'faqs' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
          >
            FAQs
          </a>
          <a
            href="#"
            onClick={() => setActiveTab('productDetails')}
            className={`pb-2 px-1 ${activeTab === 'productDetails' ? 'border-b-2 border-black text-black' : 'text-gray-500'}`}
          >
            Product Details
          </a>
        </nav>
      </div>
      <div>
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </div>
        )}
        {activeTab === 'faqs' && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQ key={index} {...faq} />
            ))}
          </div>
        )}
        {activeTab === 'productDetails' && (
          <ProductDetails />
        )}
      </div>
      <div className='flex justify-center mt-4'>
        <button className="text-lg font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black transform hover:scale-105">
          View all
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;
