import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import QuizForm from './components/QuizForm';
import Results from './components/Results';
import HomePage from './components/HomePage';
import { Question } from './types';

const questions: Question[] = [
  {
    id: 'riding-style',
    text: 'What\'s your primary riding style?',
    options: ['City commuting', 'Highway cruising', 'Off-road adventures', 'Sport riding'],
  },
  {
    id: 'experience',
    text: 'What\'s your riding experience level?',
    options: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    id: 'budget',
    text: 'What\'s your budget range?',
    options: ['Under $5,000', '$5,000 - $10,000', '$10,000 - $20,000', 'Over $20,000'],
  },
  {
    id: 'priority',
    text: 'What\'s your top priority?',
    options: ['Fuel efficiency', 'Speed', 'Comfort', 'Low maintenance'],
  },
];

function App() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState<'home' | 'quiz' | 'results'>('home');

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleSubmit = (userAnswers: Record<string, string>) => {
    setAnswers(userAnswers);
    setCurrentStep('results');
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep('home');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Helmet>
        <title>
          {currentStep === 'home'
            ? 'Your Perfect Motorcycle | Find Your Ideal Ride'
            : currentStep === 'quiz'
            ? 'Motorcycle Quiz | Your Perfect Motorcycle'
            : 'Your Motorcycle Recommendations | Your Perfect Motorcycle'}
        </title>
        <meta
          name="description"
          content={
            currentStep === 'home'
              ? 'Discover your perfect motorcycle with our personalized quiz. Get expert recommendations tailored to your riding style, experience, and budget.'
              : currentStep === 'quiz'
              ? 'Take our quick motorcycle quiz to find your ideal ride. Answer a few questions about your preferences and get personalized recommendations.'
              : 'View your personalized motorcycle recommendations based on your preferences. Find the perfect bike for your riding style and needs.'
          }
        />
      </Helmet>
      {currentStep === 'home' && <HomePage onStartQuiz={handleStartQuiz} />}
      {currentStep === 'quiz' && <QuizForm questions={questions} onSubmit={handleSubmit} />}
      {currentStep === 'results' && <Results answers={answers} onReset={handleReset} />}
    </div>
  );
}

export default App;