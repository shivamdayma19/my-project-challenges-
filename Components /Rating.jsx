import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAdd = () => {
    if (!comment.trim()) return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Rate This ⭐</h1>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {star <= (hover || rating) ? "⭐" : "☆"}
          </button>
        ))}
      </div>

      <p>
        {rating ? `You rated: ${rating} ⭐` : "No rating yet"}
      </p>

      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={handleAdd}
      >
        Add Comment
      </button>

      <div>
        <h2>Comments:</h2>
        {comments.length ? (
          comments.map((c, i) => (
            <p key={i}>
              {c}
            </p>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default Rating;