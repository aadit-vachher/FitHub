import React, { useState } from 'react';
import './AskAI.css';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const AskAI = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) {
      setError('Please enter a question!');
      return;
    }

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY
          },
          body: JSON.stringify({
            contents: [{
              role: 'user',
              parts: [{ text: question }]
            }]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        if (errorData?.error?.message?.includes('quota')) {
          throw new Error('API quota exceeded. Please try again later.');
        }
        if (errorData?.error?.message?.includes('API key')) {
          throw new Error('Invalid API key. Please check your API key configuration.');
        }
        throw new Error(errorData?.error?.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      let aiText = '';
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text) {
        aiText = data.candidates[0].content.parts[0].text;
      } else if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.text) {
        aiText = data.candidates[0].content.text;
      } else if (data.candidates && data.candidates[0] && data.candidates[0].text) {
        aiText = data.candidates[0].text;
      }
      if (!aiText) {

        console.error('Gemini API candidate object:', data.candidates[0]);

        let userMessage = 'No response received from AI.';
        if (data.candidates && data.candidates[0]) {
          if (data.candidates[0].finishReason === 'SAFETY') {
            userMessage = 'The AI could not answer due to content safety restrictions.';
          } else if (data.candidates[0].finishReason === 'CONTENT_FILTERED') {
            userMessage = 'The AI could not answer because the content was filtered.';
          } else if (data.candidates[0].finishReason === 'MAX_TOKENS') {
            userMessage = 'The AI could not answer because the response was too long or blocked.';
          }
        }
        throw new Error(userMessage);
      }
      setAnswer(aiText);
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setError('Network error. Please check your internet connection and try again.');
      } else {
        setError(err.message || 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ask-ai">
      <h2>Ask AI 💬</h2>
      <div className="input-container">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !loading && handleAsk()}
          placeholder="Ask your fitness question..."
          disabled={loading}
        />
        <button 
          onClick={handleAsk}
          disabled={loading || !question.trim()}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      {answer && (
        <div className="answer-container">
          <h3>AI Response:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskAI; 