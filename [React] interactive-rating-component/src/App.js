import { useState } from "react";
import thankYou from "./illustration-thank-you.svg";
import starIcon from "./icon-star.svg";

export default function App() {
  return (
    <div className="container">
      <RatingComponent />
    </div>
  );
}

function RatingComponent() {
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    if (!score) {
      alert("Please select a rating before submitting");
      return;
    }
    setIsSubmitted(true);
  }

  function handleClick(rating) {
    setScore(rating !== score ? rating : null);
  }

  return (
    <div className="container__box">
      <div className={`${isSubmitted ? "flip" : ""}`}>
        <span>
          <img src={starIcon} alt="something" />
        </span>
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <RatingScore
          onHandleClick={handleClick}
          score={score}
          setScore={setScore}
        />
        <Button onHandleSubmit={handleSubmit} />
      </div>

      <div className={`container__box--back ${isSubmitted ? "" : "flip"}`}>
        <img src={thankYou} alt="Image-of-phone" />
        <span>You selected {score} out of 5</span>
        <h3>Thank you!</h3>
        {score < 3 ? (
          <p>
            We're sorry to hear that your experience was not up to the mark.
            Please let us know how we can improve.
          </p>
        ) : (
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        )}
      </div>
    </div>
  );
}

function RatingScore({ score, onHandleClick }) {
  return (
    <ul>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
        <li
          value={num}
          key={num}
          className={num === score ? "selected" : ""}
          onClick={(e) => onHandleClick(e.target.value)}
        >
          {num}
        </li>
      ))}
    </ul>
  );
}

function Button({ onHandleSubmit }) {
  return <button onClick={onHandleSubmit}>Submit</button>;
}
