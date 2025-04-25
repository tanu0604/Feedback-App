import React, { useState, useContext } from "react";
import { DarkModeContext } from "../App";
import { db, addDoc, collection } from "../firebase";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import AOS from "aos";

const AddFeedback = () => {
  const { isDarkMode } = useContext(DarkModeContext); // Get dark mode state

  // States for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add feedback to Firestore collection "feedbacks"
      await addDoc(collection(db, "feedbacks"), {
        name: name,
        email: email,
        feedback: feedback,
        createdAt: new Date(),
      });

      // Show success toast
      toast.success("Feedback submitted successfully! 🎉");

      // Reset form after submission
      setName("");
      setEmail("");
      setFeedback("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error submitting feedback. Please try again! 😓");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container py-5 ${isDarkMode ? "text-light" : ""}`} data-aos="fade-up">
      <h3 className="text-center mb-5 text-primary"> Share Your Feedback</h3>

      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className={`card shadow-lg border-0 rounded-lg ${isDarkMode ? "bg-dark text-light" : "bg-light"}`}
            style={{ padding: "20px" }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <FaUser className="me-2" />
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="me-2" />
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="feedback" className="form-label">
                    <FaCommentDots className="me-2" />
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    className="form-control"
                    rows="5"
                    placeholder="Write your feedback here"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "✨ Submit Feedback"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
