import React, { useState } from 'react';
import './AskAI.css';

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
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not found. Please check your .env file.');
      }

      

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `You are a fitness expert. Please answer the following question in a helpful and informative way: ${question}` }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.log('API Error Response:', errorData); // Debug log
        
        if (errorData?.error?.message?.includes('quota')) {
          throw new Error('API quota exceeded. Please try again later.');
        }
        if (errorData?.error?.message?.includes('API key')) {
          throw new Error('Invalid API key. Please check your API key configuration.');
        }
        throw new Error(errorData?.error?.message || `HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // Debug log

      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('No response received from AI');
      }

      setAnswer(data.candidates[0].content.parts[0].text);
    } catch (err) {
      console.error('Error details:', err);
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