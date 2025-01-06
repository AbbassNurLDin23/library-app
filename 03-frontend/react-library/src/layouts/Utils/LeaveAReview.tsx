import { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {
  const [starInput, setStarInput] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function starValue(value: number) {
    setStarInput(value);
    setDisplayInput(true);
    setIsDropdownOpen(false); // Close dropdown after selecting a star
  }

  return (
    <div className="dropdown position-relative" style={{ cursor: "pointer" }}>
      <h5
        className="dropdown-toggle"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-expanded={isDropdownOpen}
      >
        Leave a review?
      </h5>
      {isDropdownOpen && (
        <ul className="dropdown-menu show">
          <li>
            <button onClick={() => starValue(0)} className="dropdown-item">
              0 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(0.5)} className="dropdown-item">
              .5 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(1)} className="dropdown-item">
              1 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(1.5)} className="dropdown-item">
              1.5 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(2)} className="dropdown-item">
              2 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(2.5)} className="dropdown-item">
              2.5 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(3)} className="dropdown-item">
              3 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(3.5)} className="dropdown-item">
              3.5 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(4)} className="dropdown-item">
              4 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(4.5)} className="dropdown-item">
              4.5 star
            </button>
          </li>
          <li>
            <button onClick={() => starValue(5)} className="dropdown-item">
              5 star
            </button>
          </li>
        </ul>
      )}
      <StarsReview rating={starInput} size={32} />

      {displayInput && (
        <form method="POST" action="#">
          <hr />

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="submitReviewDescription"
              placeholder="Optional"
              rows={3}
              onChange={(e) => setReviewDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              onClick={() => props.submitReview(starInput, reviewDescription)}
              className="btn btn-primary mt-3"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
