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
      alignItems: "center",
      padding: "1rem"
    }}>
      <div className="card my-3 w-100" style={{ 
        maxWidth: '400px', 
        backgroundColor:"rgb(0, 118, 0)",
        margin: "0 auto"
      }}>
        <div className="card-header text-center" style={{ 
          fontFamily: 'Playwrite AR, cursive',
          fontSize: "clamp(1rem, 4vw, 1.5rem)",
          padding: "0.75rem 0.5rem"
        }}>
          Rate Us !
        </div>
        <div className="card-body p-3 p-sm-4">
          <p className="card-text" style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
            textAlign: "center",
            marginBottom: "0.5rem"
          }}>
            Since we care about your experience and can't
            wait to make your event unforgettable!
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2 gap-sm-3 my-3 flex-wrap">
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
                    padding: "4px",
                    minWidth: "32px",
                    minHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title={item.label}
                >
                  <span style={{
                    fontSize: "clamp(20px, 5vw, 28px)",
                    lineHeight: 1,
                    display: "flex"
                  }}>
                    {item.icon}
                  </span>
                </span>
              );
            })}
          </div>

          <div className="text-center mt-3">
            <button 
              onClick={() => alert("Your review has been submitted and taken into consideration!")} 
              className="btn btn-primary"
              style={{
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                padding: "0.5rem 1.5rem",
                width: "auto",
                minWidth: "120px"
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateUs;