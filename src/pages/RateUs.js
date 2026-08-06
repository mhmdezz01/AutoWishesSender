//using bootstrap
import React, { useState } from 'react';
import { 
  BsEmojiFrown, 
  BsEmojiExpressionless, 
  BsEmojiSmile, 
  BsEmojiLaughing, 
  BsEmojiGrin 
} from 'react-icons/bs';

function RateUs() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const icons = [
    { level: 1, icon: <BsEmojiFrown size={24} />, label: "Very Bad" },
    { level: 2, icon: <BsEmojiExpressionless size={24} />, label: "Bad" },
    { level: 3, icon: <BsEmojiSmile size={24} />, label: "OK" },
    { level: 4, icon: <BsEmojiLaughing size={24} />, label: "Good" },
    { level: 5, icon: <BsEmojiGrin size={24} />, label: "Great" },
  ];

  const activeIndex = hoverRating || rating;

  return (
    <div style={{ 
      backgroundColor: "rgb(176, 118, 122)", 
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="card my-3" style={{ maxWidth: '400px', backgroundColor:"rgb(0, 118, 0)" }}>
        <div className="card-header text-center" style={{ fontFamily: 'Playwrite AR, cursive' }}>Rate Us !</div>
        <div className="card-body">
          <p className="card-text">
            Since we care about your experience and can't
            wait to make your event unforgettable!
          </p>
          <div className="d-flex align-items-center gap-3 my-3">
            {icons.map((item) => {
              const isSelected = item.level <= activeIndex;
              
              return (
                <span
                  key={item.level}
                  onClick={() => setRating(item.level)}
                  onMouseEnter={() => setHoverRating(item.level)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    cursor: 'pointer',
                    color: isSelected ? '#ffc107' : '#6c757d',
                    transition: 'transform 0.15s ease, color 0.15s ease',
                    transform: item.level === activeIndex ? 'scale(1.25)' : 'scale(1)',
                  }}
                  title={item.label}
                >
                  {item.icon}
                </span>
              );
            })}
          </div>

          <div className="text-center">
            <button onClick={() => alert("Your review has been submitted and taken into consideration!")} className="btn btn-primary">
            Submit
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RateUs;