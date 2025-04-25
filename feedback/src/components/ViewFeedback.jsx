import React, { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../App";
import { db, collection, getDocs } from "../firebase";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const ViewFeedback = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const feedbacksCollection = collection(db, "feedbacks");
      const feedbackSnapshot = await getDocs(feedbacksCollection);
      const feedbackList = feedbackSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      }));
      setFeedbacks(feedbackList);
    } catch (error) {
      toast.error("Error fetching feedbacks. Please try again!");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`container py-5 ${isDarkMode ? "text-light" : ""}`}
      data-aos="fade-up"
    >
      <h3
        className="text-center mb-5 text-primary"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        View Feedbacks
      </h3>

      {feedbacks.length === 0 ? (
        <div className="text-center" data-aos="fade-up">
          No feedbacks available.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="col"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div
                className={`card shadow-lg ${
                  isDarkMode ? "bg-dark text-light" : "bg-light"
                }`}
                style={{ minHeight: "250px" }}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <FaUser className="me-2" />
                    {feedback.name}
                  </h5>
                  <p
                    className="card-text"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <FaEnvelope className="me-2" />
                    {feedback.email}
                  </p>
                  <p
                    className="card-text"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <FaComments className="me-2" />
                    {feedback.feedback}
                  </p>
                  <p
                    className="card-text text-muted"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <small>
                      Received on: {feedback.createdAt.toLocaleString()}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewFeedback;
