import React from "react";
import { useNavigate } from "react-router-dom";
import KEPAImg from "../assets/images/KEPA2.png";
import "../styles/AIAssistant.css";
import MayaFAQs from "../pages/KEPAFAQs";

const AI_Travel_Assistant = () => {
  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate("/chat");
  };

  return (
    <>
      <br /><br />
      <h1 className="text1">How to get your itinerary:</h1> <br />
      <div className="containerQuis">
        <h1>1. Chat with Kepa</h1>
        <p>
          Share your desired destination (or let Kepa recommend a place you'll adore), specify the duration of your trip, mention your preferences and interests, and include any other essential details.
        </p>
      </div>
      <br />
      <div className="containerQuis">
        <h1>2. Collaborate on a draft plan</h1>
        <p>
          Kepa will create a preliminary plan based on the information you provide. Continue the conversation to provide feedback and fine-tune the plan, ensuring it covers all your preferences and details.
        </p>
      </div>
      <br />
      <div className="containerQuis">
        <h1>3. Get a full trip plan</h1>
        <p>
          Once you're happy, Kepa will use her AI travel agent magic to transform this draft into a full, visual trip plan in less than a minute. Don’t worry - you can always go back to make changes.
        </p>
      </div>
      <br />
      <div className="containerQuis">
        <h1>4. Save & Share</h1>
        <p>
          Save your plan so you always have it at hand, and share it easily with your fellow travelers. A personal AI travel planner in your pocket! Cool, right?
        </p>
      </div>
      <div className="containerAI">
        <div>
          <img src={KEPAImg} className="img_Kepa" alt="" />
        </div>
        <h1>
          Hi there! <br /> I'm Kepa, your AI travel assistant
        </h1>
        <p>
          Consider me your very own virtual travel agent - share your next trip idea with me, and I'll help create a trip plan just for you. Leveraging GoogeleGimini and Live the World's travel expertise, I am committed to making your trip unforgettable! <br /><br />
          Not sure where you want to go yet? Let’s chat about the type of trip you have in mind, and I’ll recommend a destination that’s perfect for you. <br /><br />
          Looking for somewhere to stay? Once we know where you’re headed, I’ll happily recommend hotels based on your budget and travel style.
        </p>
        <div style={{ textAlign: "center" }}>
          <button className="my-button" onClick={navigateToChat}>
            Chat with Kepa
          </button>
        </div>
      </div>
      <MayaFAQs />
    </>
  );
};

export default AI_Travel_Assistant;
