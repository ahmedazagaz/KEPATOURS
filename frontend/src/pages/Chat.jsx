import React, { useState } from 'react';
import axios from 'axios';
import "./Chat.css";
import Img5 from "../assets/images/plan.png"; 
import Imgicon from "../assets/images/icon1.png"; 

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi, I’m KEPA, your personal AI travel assistant. I can help you plan a trip, recommend destinations, recommend hotels, or answer any travel-related questions." },
    { type: 'bot', text: "What do you want to do?" }
  ]);

  async function generateAnswer() {
    if (!question.trim()) return;

    setAnswer("loading..");
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA_XARdXvnkQrqpKEzfw0Raf3LXIl1yuBw",
        {
          contents: [
            { parts: [{ text: question }] },
          ],
        });
      const newAnswer = response.data.candidates[0].content.parts[0].text;
      
      setMessages([...messages, { type: 'user', text: question }, { type: 'bot', text: newAnswer }]);
      
      setAnswer("");
      setQuestion("");

    } catch (error) {
      console.error('Error generating answer:', error);
      setMessages([...messages, { type: 'user', text: question }, { type: 'bot', text: "Sorry, I couldn't process your request." }]);
      setAnswer("");
    }
  }

  function handleHotelBooking() {
    window.open("https://www.airbnb.com/login", "_blank");  }

  return (
    <div className="chat-container">
      <div className="content-container">
        <div className="chat-interface">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message-box ${msg.type}-message`}>
                {msg.type === 'bot' && <img src={Imgicon} alt="Bot Logo" className="bot-logo" />} 
                {msg.text}
              </div>
            ))}
          </div>
          <div className="button-group">
            <button onClick={() => setQuestion("I want to plan a trip")}>I want to plan a trip</button>
            <button onClick={() => setQuestion("I want to get a recommendation for my trip destination")}>I want to get a recommendation for my trip destination</button>
            <button onClick={handleHotelBooking}>I want to book a hotel</button>
          </div>
          <textarea 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)}
            cols="30"
            rows="3" 
            placeholder="Start messaging"
          ></textarea>
          <button className='Buttoun-ai' onClick={generateAnswer}>Generate answer</button>
          {answer && <pre>{answer}</pre>}
        </div>
      </div>
      <div className="image-container">
        <img src={Img5} alt="Trip plan" style={{ maxWidth: '100%', maxHeight: '100%'}} />
      </div>
    </div>
  );
}

export default Chat;
